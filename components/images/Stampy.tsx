import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={93}
    height={213}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#B3563B"
        d="M42.923.266c1.993.863 3.852 1.75 5.736 2.582 1.824.804 3.676.745 5.567.15 2.018-.633 4.041-1.316 6.113-1.706 3.612-.68 6.464 1.716 6.65 5.389.022.442.014.887.048 1.328.164 2.116.7 2.776 2.727 3.38 1.648.493 3.357.839 4.936 1.498 4.085 1.706 5.4 5.352 3.063 9.052-1.801 2.852-1.47 5.27.421 7.812.892 1.199 1.746 2.476 2.338 3.84 1.29 2.978.34 5.569-2.463 7.245a9.17 9.17 0 0 1-1.055.55c-3.77 1.633-4.46 2.934-3.708 7.053.314 1.717.63 3.415-.658 4.93-1.122 1.317-2.613 1.538-4.201 1.553-1.764.015-3.528.044-5.466.071-.377-.226-.577-.458-.783-.685-2.423-2.674-4.799-5.409-8.468-6.582-.185-.823-.344-1.55-.508-2.298.204-.123.346-.225.5-.299 3.726-1.764 7.005-4.116 9.71-7.26.291-.338.904-.485 1.39-.553 1.857-.258 3.544-.893 4.795-2.315 1.188-1.351 1.923-2.975 1.216-4.766-.652-1.654-2.187-2.055-3.833-2.07-.22-.003-.438-.05-.658-.078-3.272-.425-4.375-1.317-4.925-4.225-.458-2.421-1.602-3.994-4.193-4.464-2.234-.404-3.322-1.747-3.582-4.021-.11-.96-.018-1.942-.018-3.098-1.368 1.62-2.994 2.457-4.828 2.619-1.872.165-3.785.127-5.66-.045-3.49-.32-4.988.578-5.94 3.92-.493 1.735-1.47 3.09-3.147 3.704-1.895.694-3.857 1.233-5.825 1.685-.672.155-1.07.278-1.076 1-.022 3.004-.314 6.035-.01 9.005.764 7.464 5.951 12.741 13.343 13.359 2.357.196 3.539.79 3.598 3.104-1.323-.966-2.185-.45-3.084.57-2.616 2.965-4.63 6.288-6.194 9.907-.272.629-.693 1.193-1.045 1.787-1.533-.772-2.042-2.158-2.108-3.731-.065-1.549.018-3.103 0-4.655-.02-1.827-.523-2.474-2.322-2.822-1.736-.336-3.526-.438-5.228-.887-1.294-.341-2.635-.867-3.696-1.66-2.227-1.66-2.619-4.05-1.336-6.51.307-.588.652-1.157.968-1.74 1.374-2.537 1.011-3.976-1.385-5.637-1.233-.854-2.565-1.613-3.642-2.637-2.039-1.94-1.871-5.225.268-7.064.904-.776 1.91-1.437 2.891-2.118 1.425-.987 2.009-2.318 1.703-4.023-.281-1.57-.64-3.127-.872-4.704-.585-3.971 1.673-6.762 5.693-7.017 1.365-.086 2.742-.03 4.112.01 1.815.052 3.397-.37 4.61-1.857.754-.924 1.556-1.832 2.456-2.608 1.165-1.003 2.449-1.865 3.707-2.878 1.096-.09 2.165-.09 3.358-.09Z"
      />
      <Path
        fill="#FFCEA9"
        d="M62.92 56.925c2.78 5.177 5.667 10.3 8.308 15.548 2.225 4.422 4.157 8.992 6.233 13.49 1.93 4.18 3.914 8.336 5.808 12.532 1.272 2.821 3.376 4.784 5.933 6.415 1.395.889 2.621 2.045 3.993 3.134.07.053.07.187-.015.296a80.236 80.236 0 0 1-3.924 1.263c.986.442 2.373 1.063 3.761 1.789-.32 2.206-2.29 1.523-3.223 2.037l3.472 1.591v.699c-1.989 1.41-4.191 1.14-6.434 1.082.83.349 1.668.684 2.49 1.052.4.18.831.362 1.14.657.29.275.435.7.644 1.059-.372.171-.733.457-1.118.495-2.796.277-5.331-.658-7.71-1.956-1.34-.731-2.493-1.803-3.88-2.815-1.904-2.525-3.838-4.849-5.377-7.411-4.372-7.272-8.718-14.566-12.814-21.996-3.33-6.04-6.297-12.284-9.374-18.464-.154-.308.043-1.025.323-1.276 1.114-1.002 2.318-1.904 3.502-2.825 2.75-2.137 5.508-4.264 8.262-6.396Z"
      />
      <Path
        fill="#FFCEAA"
        d="M.266 107.399c1.958-2.367 3.952-4.604 5.859-6.913.98-1.186 1.862-2.465 2.688-3.766 3.33-5.242 7.278-9.998 11.41-14.607 4.529-5.053 8.397-10.59 12.032-16.302.138-.218.327-.402.594-.519-1.318 4.853-2.815 9.6-4.137 14.397-1.65 5.983-3.154 12.006-4.804 18.048-.14.198-.199.36-.257.515 0-.007.014-.004.014-.004-1.239 1.403-2.51 2.778-3.709 4.215-2.2 2.637-2.622 6.025-3.752 9.114-.5 1.367-.966 2.75-1.545 4.083-.157.36-.668.564-1.017.84-.213-.407-.494-.793-.62-1.225-.156-.532-.183-1.102-.3-1.886-.49 1.215-.828 2.218-1.305 3.151-.187.366-.685.573-1.041.852-.275-.408-.718-.789-.789-1.23-.128-.806-.036-1.647-.036-2.634-.545 1.141-.959 2.158-1.513 3.091-.215.361-.763.75-1.13.724-.3-.022-.707-.606-.803-1.005-.205-.847-.24-1.736-.378-2.898-.3.599-.448 1.08-.744 1.438-.42.507-.949.922-1.43 1.376-.3-.628-.9-1.283-.844-1.878.184-1.964.6-3.907.937-5.856.058-.339.17-.668.221-.866-1.136.179-2.278.36-3.51.492-.091-.248-.091-.448-.091-.747Zm5.791 5.249-.081-.084c-.027.029-.08.061-.076.086.016.108.048.213.074.319a.737.737 0 0 0 .083-.321Z"
      />
      <Path
        fill="#9BB894"
        d="M23.99 97.7c1.568-6.005 3.073-12.028 4.722-18.01 1.322-4.797 2.819-9.545 4.227-14.425-.011-.11.003-.174.079-.26.118-.254.161-.42.204-.585.18-.447.36-.893.532-1.433.344-.687.765-1.251 1.037-1.88 1.564-3.62 3.578-6.942 6.194-9.907.9-1.02 1.76-1.536 3.158-.514 2.786.868 5.243.235 7.564-.907.805-.396 1.366-1.291 2.038-1.958 3.644 1.078 6.02 3.813 8.443 6.487.206.227.406.459.681.735.27.6 1.06 1.129.1 1.807-2.803 2.207-5.56 4.334-8.31 6.471-1.185.921-2.39 1.823-3.503 2.825-.28.251-.476.968-.323 1.276 3.077 6.18 6.043 12.423 9.374 18.464 4.096 7.43 8.442 14.724 12.814 21.996 1.54 2.562 3.473 4.886 5.3 7.371.904 3.022 1.717 5.998 2.573 8.96.943 3.265 1.891 6.53 2.914 9.771.292.924.129 1.358-.794 1.673-4.878 1.663-9.743 3.369-14.794 5.122-5.87 1.596-11.616 2.826-17.5 3.322-4.59-.265-9.18-.53-13.987-.816-2.287-.422-4.364-.787-6.423-1.234-3.003-.653-5.993-1.366-8.99-2.053-3.027-.955-6.056-1.909-9.084-2.866-.449-.142-.894-.298-1.465-.488.994-2.741 1.975-5.338 2.878-7.963a4155.207 4155.207 0 0 0 8.144-23.866c.705-2.09 1.265-4.23 1.881-6.457-.01-.11-.023-.113.054-.145.138-.191.2-.352.262-.512Z"
      />
      <Path
        fill="#FFCEA9"
        d="M50.734 144.199c5.87-.594 11.615-1.824 17.405-3.362.898 3.244 1.433 6.585 2.557 9.713 1.427 3.974 3.332 7.777 4.962 11.789-3.398 2.339-6.733 4.533-10.049 6.757-.411.276-.715.713-1.07 1.076-6.137-7.801-11.11-16.225-13.805-25.973ZM21.302 140.112c3.015.573 6.005 1.286 9.008 1.939 2.06.447 4.136.812 6.319 1.244-.667 3.015-1.57 5.973-2.201 8.988-1.117 5.34-2.068 10.714-3.088 16.074-.083.433-.163.866-.37 1.406a4.713 4.713 0 0 1-1.407-.114c-3.91-.897-7.818-1.801-11.726-2.702.3-3.29.51-6.591.92-9.867.58-4.631 1.3-9.245 1.977-13.864.147-1.002.364-1.993.568-3.104Z"
      />
      <Path
        fill="#3E4242"
        d="M78.407 166.547c1.076 1.507 2.142 3.021 3.232 4.517.569.782.662 1.635.024 2.314-1.228 1.307-2.456 2.665-3.895 3.711-3.38 2.457-7.199 3.885-11.387 4.234-.394.033-.796.03-1.19-.009-1.322-.132-1.676-.662-1.106-1.838.46-.948 1.121-1.796 1.61-2.731.425-.81.733-1.681 1.209-2.643 3.912-2.597 7.707-5.076 11.503-7.555Z"
      />
      <Path
        fill="#3E4243"
        d="M30.518 174.96c-.174 1.712-.334 3.427-.527 5.137-.117 1.035-.711 1.59-1.772 1.558-5.809-.172-11.385-1.3-16.444-4.293-.716-.424-1.131-1.356-1.686-2.053.736-.472 1.425-1.058 2.22-1.386 1.092-.452 2.29-.644 3.392-1.079.524-.207.929-.719 1.566-1.129 4.536 1.057 8.893 2.151 13.251 3.245Z"
      />
      <Path
        fill="#EFD694"
        d="M78.39 166.462c-3.779 2.564-7.575 5.043-11.459 7.547-.842-1.204-1.595-2.433-2.37-3.75.332-.45.637-.887 1.048-1.163a1297.61 1297.61 0 0 1 10.064-6.662c.956 1.287 1.829 2.615 2.717 4.028Z"
      />
      <Path
        fill="#EED694"
        d="M30.537 174.846c-4.377-.98-8.734-2.074-13.2-3.198.082-1.513.273-2.996.482-4.59 3.926.79 7.834 1.694 11.743 2.591.422.096.854.149 1.39.224-.06 1.621-.228 3.24-.415 4.973Z"
      />
      <Path
        fill="#FFCEAA"
        d="M33.153 64.474c.026.112-.017.277-.13.498-.026-.111.017-.278.13-.498Z"
      />
      <Path
        fill="#FDCCA7"
        d="M53.72 47.726c-.647.762-1.208 1.657-2.013 2.053-2.32 1.142-4.778 1.775-7.461.925-.236-2.388-1.418-2.981-3.775-3.178-7.392-.618-12.579-5.895-13.343-13.36-.304-2.969-.012-6 .01-9.003.005-.723.403-.846 1.076-1.001 1.968-.452 3.93-.991 5.825-1.684 1.678-.614 2.654-1.97 3.148-3.705.95-3.342 2.449-4.24 5.94-3.92 1.874.172 3.787.21 5.66.045 1.833-.162 3.46-1 4.827-2.62 0 1.157-.091 2.14.018 3.099.26 2.274 1.347 3.617 3.582 4.021 2.59.47 3.735 2.043 4.193 4.464.55 2.908 1.653 3.8 4.925 4.225.22.029.439.075.658.078 1.646.016 3.18.416 3.833 2.07.707 1.791-.028 3.415-1.216 4.766-1.251 1.422-2.938 2.058-4.795 2.316-.486.067-1.099.214-1.39.552-2.705 3.144-5.984 5.496-9.71 7.26-.154.074-.296.176-.5.299.164.748.323 1.475.508 2.298ZM33.648 31.587c-.283.122-.582.215-.846.37-1.395.819-2.4 1.923-2.529 3.628-.14 1.856.421 3.42 2.05 4.431 2.258 1.403 5.045.809 6.412-1.31 1.482-2.298.901-4.914-1.323-6.702 1.295-.786 1.927-1.916 1.699-3.442-.27-1.807-1.592-2.485-3.478-2.862l2.22-1.152c-1.88-.216-3.495.683-4.482 2.369-.904 1.546-.778 2.968.277 4.67Zm19.385.842c-.21.227-.446.436-.627.683-1.13 1.538-1.508 3.172-.613 4.967.842 1.69 2.16 2.651 4.081 2.664 1.947.014 3.407-.838 4.266-2.595 1.513-3.093-.404-6.17-4.098-6.93.74-.925.99-1.946.63-3.1-.474-1.513-1.699-2.076-3.372-2.406l2.213-1.171c-2.292-.283-4.508 1.424-4.996 3.705-.419 1.958.486 3.354 2.516 4.183Zm-3.164 7.022 1.24-1.905-.282-.318c-3.668 3.693-7.22 3.838-10.572-.38-.369 1.072.302 2.144 1.81 3.172 2.508 1.71 5.401 1.547 7.804-.57Zm-5.04-8.11c-1.687-.57-2.9-.17-3.477 1.144-.502 1.145-.037 2.555 1.044 3.084 0-.447-.088-.901.02-1.303.182-.688.31-1.607.794-1.93.395-.262 1.307.12 1.928.372.527.214.966.648 1.444.985l.357-.386a40.654 40.654 0 0 0-2.11-1.967Z"
      />
      <Path
        fill="#fff"
        d="M6.066 112.707a.892.892 0 0 1-.092.262c-.026-.106-.058-.212-.074-.319-.004-.025.049-.057.076-.086.027.028.054.056.09.143ZM23.908 97.737c.02.124-.042.285-.18.483-.02-.123.04-.285.18-.483ZM12.893 113.04c-.014.01.014-.01 0 0Z"
      />
      <Path
        fill="#F3715A"
        d="M56.143 31.193c3.77.577 5.687 3.708 4.174 6.801-.86 1.757-2.496 2.816-4.443 2.803-1.921-.013-3.239-1.028-4.081-2.718-.895-1.795-.517-3.429.613-4.967.181-.247.417-.456.794-.762 1.033-.37 2.733-.933 2.943-1.157Z"
      />
      <Path
        fill="#F2715A"
        d="M37.466 31.95c2.359 1.655 2.75 4.458 1.269 6.756-1.367 2.119-4.154 2.713-6.413 1.31-1.628-1.011-2.189-2.575-2.049-4.431.128-1.705 1.134-2.81 2.53-3.629.263-.154.562-.247.995-.403 1.122.914 2.491.55 3.668.397Z"
      />
      <Path
        fill="#080605"
        d="M56.004 31.31c-.904.38-1.77.67-2.746.976-2.255-.686-3.16-2.082-2.741-4.04.487-2.281 2.704-3.988 4.995-3.705L53.3 25.712c1.673.33 2.898.893 3.371 2.407.36 1.153.112 2.174-.667 3.19ZM37.345 32.07c-1.244.22-2.425.397-3.483-.583-1.269-1.602-1.395-3.024-.49-4.57.986-1.686 2.601-2.585 4.48-2.37L35.634 25.7c1.886.377 3.208 1.055 3.478 2.862.228 1.526-.404 2.655-1.766 3.508Z"
      />
      <Path
        fill="#181310"
        d="M49.804 39.52c-2.338 2.047-5.23 2.21-7.738.5-1.51-1.028-2.18-2.1-1.81-3.173 3.352 4.22 6.903 4.074 10.571.38l.281.319c-.413.635-.826 1.27-1.304 1.974Z"
      />
      <Path
        fill="#1E1814"
        d="M44.92 31.378a73.994 73.994 0 0 1 2.019 1.929c-.12.128-.238.257-.357.386-.478-.337-.917-.771-1.444-.985-.62-.251-1.533-.634-1.928-.371-.483.322-.612 1.241-.795 1.929-.107.402-.02.856-.02 1.303-1.08-.53-1.545-1.939-1.043-3.084.576-1.314 1.79-1.713 3.568-1.107Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={93} height={213} fill="#fff" rx={6} />
      </ClipPath>
    </Defs>
  </Svg>
);
export { SvgComponent as Stampy };
