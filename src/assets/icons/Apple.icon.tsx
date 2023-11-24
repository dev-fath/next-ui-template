import { IconProps } from '@assets/icons/IconBase';

const AppleIcon = (props: IconProps) => {
  const { width, height, color } = props;

  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="-0.175 -0.1 1.2 1.2"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      className="jam jam-apple"
    >
      <path d="M0.681 0.531c-0.001 -0.127 0.103 -0.187 0.108 -0.19 -0.059 -0.086 -0.15 -0.098 -0.183 -0.099 -0.078 -0.008 -0.152 0.046 -0.192 0.046 -0.039 0 -0.1 -0.045 -0.165 -0.044C0.165 0.245 0.087 0.294 0.043 0.369c-0.088 0.153 -0.023 0.38 0.063 0.504 0.042 0.061 0.092 0.129 0.158 0.127 0.063 -0.003 0.087 -0.041 0.164 -0.041 0.077 0 0.098 0.041 0.165 0.04 0.068 -0.001 0.111 -0.062 0.153 -0.123 0.048 -0.07 0.068 -0.139 0.069 -0.142 -0.002 -0.001 -0.133 -0.051 -0.134 -0.202zm-0.126 -0.372c0.035 -0.042 0.058 -0.101 0.052 -0.16C0.557 0.002 0.496 0.034 0.46 0.076c-0.032 0.038 -0.061 0.097 -0.053 0.155 0.056 0.004 0.113 -0.028 0.148 -0.071z" />
    </svg>
  );
};

export default AppleIcon;
