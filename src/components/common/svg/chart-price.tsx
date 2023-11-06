import { SvgProps } from './svg-props';
import { px } from './util-function';

export function ChartPrice(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill ? props.fill : 'currentColor'}
      width={px(props.width)}
      height={px(props.height)}
      viewBox="0 0 16 16"
    >
      <g id="page-1" strokeWidth="1" transform="translate(-2, -2)" fill="none" fillRule="evenodd" stroke="currentColor">
        <rect id="rect" strokeWidth="1.6" x="2.8" y="2.8" width="14.4" height="14.4" rx="3.2" />
        <path
          d="M10.9742043,11.3854693 L10.9533933,11.4052594 L10.9533933,11.4052594 C10.6912415,11.6544764 10.266294,11.6544764 10.0041422,11.4052594 L8.58093252,10.0467618 L7.15504466,11.4052594 L7.15504467,11.4052594 C6.89699411,11.6589368 6.47154986,11.6656533 6.20478639,11.4202616 C5.93802292,11.1748697 5.93095997,10.7702956 6.18901032,10.5166182 L6.18901032,10.5166182 C6.1949603,10.5109713 6.2012357,10.5056432 6.20780735,10.5006585 L8.10429303,8.69018384 L8.10429303,8.69018384 C8.36782592,8.44052736 8.79404,8.44052736 9.05757184,8.69018384 L10.4807816,10.0461247 L12.8539145,7.78685909 L12.8539146,7.78685905 C13.1162281,7.53758908 13.541373,7.5377319 13.8035017,7.78717833 C14.0656304,8.03662407 14.0654802,8.4409135 13.803166,8.69018347 L10.9742043,11.3854693 Z"
          id="path"
          strokeWidth="0.5"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}
