const DropdownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 16 10"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#333"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 7.667L15.68 0.333" transform="translate(0 1)" />
        <path
          d="M0.32 7.667L8 0.333"
          transform="translate(0 1) matrix(1 0 0 -1 0 8)"
        />
      </g>
    </svg>
  );
};

export default DropdownIcon;
