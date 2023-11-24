import { useRouter } from 'next/router';

export interface IParam<TParamsName> {
  paramName: TParamsName;
  paramValue: string | number;
}
interface IUrlReplacerProps<TParamsName> {
  params: IParam<TParamsName>[];
}

function useCreateUrl<TParamsName>(initUrl: string, isTabPage?: boolean) {
  const router = useRouter();

  let urlParams: string[] = [];

  const getParamData = (queryString: string) => {
    const urlParamsData: IParam<TParamsName>[] = [];

    const queryArray = queryString.slice(1).split('&');

    queryArray.forEach((data) => {
      const [name, value] = data.split('=');
      urlParamsData.push({ paramName: name as TParamsName, paramValue: value });
    });

    return urlParamsData;
  };

  const urlReplacer = ({ params }: IUrlReplacerProps<TParamsName>) => {
    params.forEach((param) => {
      if (!!param.paramValue) {
        if (!urlParams.includes(`${param.paramName}=${param.paramValue}`))
          urlParams.push(`${param.paramName}=${param.paramValue}`);
      }
    });
    router.replace(
      initUrl,
      `${initUrl}${urlParams.length > 0 ? (isTabPage ? '&' : '?') : ''}${urlParams.join('&')}`,
    );
  };

  return { urlReplacer, getParamData };
}

export default useCreateUrl;
