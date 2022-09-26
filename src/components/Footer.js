import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300">
      <div className="my-8 px-20 flex justify-between items-center">
        <div className="basis-1/2">
          <Link to="/">
            <svg width="190" height="80" viewBox="0 0 190 80">
              <path
                d="M28.5696 59.029L29.5399 55.7392C30.0414 54.0385 29.9242 52.2151 29.2088 50.5927C28.3016 48.535 28.3657 46.1788 29.3835 44.1735L31.2696 40.4575L28.5696 41.0979L15.2283 50.7038C14.4871 51.1841 13.593 48.9427 13.7989 47.822C14.593 43.4993 20.4695 38.6964 20.6284 36.9353C20.7554 35.5264 20.2578 34.0001 19.9931 33.4131L15.3502 35.82C14.756 36.128 14.0771 36.2323 13.4179 36.1167C11.6962 35.8149 9.92395 36.0121 8.31063 36.685L6.17532 37.5757C5.85767 39.9772 6.39768 46.2531 11.0989 52.7851C15.8001 59.3172 24.7049 59.6694 28.5696 59.029Z"
                fill="#B23D2B"
                fill-opacity="0.24"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40.1408 50.5234C36.853 55.0815 31.4857 58.0501 25.4225 58.0501C15.4187 58.0501 7.30894 49.9688 7.30894 40.0001C7.30894 39.3708 7.34126 38.7491 7.40432 38.1364C7.74725 37.9193 8.13103 37.6899 8.52298 37.4772C9.35631 37.0251 10.1053 36.717 10.5658 36.6711C11.6797 36.5601 13.3592 36.9139 14.0819 37.1196L14.3713 37.202L14.6429 37.0726L19.6713 34.6761C19.7764 34.9526 19.8664 35.3045 19.9047 35.7018C19.9732 36.4127 19.8615 37.1284 19.5108 37.672C19.0999 38.3089 18.4187 39.2238 17.6386 40.2716L17.6386 40.2716L17.6385 40.2717L17.6385 40.2718L17.6383 40.2719C17.0812 41.0202 16.4737 41.8361 15.8781 42.667C15.1789 43.6425 14.5069 44.6254 13.997 45.4929C13.742 45.9266 13.52 46.3441 13.3543 46.7263C13.1935 47.097 13.0622 47.4866 13.0317 47.851C12.8781 49.6882 13.8561 50.9494 14.459 51.4001L14.9248 51.7482L15.3982 51.4104C19.7086 48.3348 28.5091 42.079 29.498 41.4631C29.8136 41.2665 30.2062 41.2073 30.6194 41.2438C30.9606 41.274 31.2676 41.3661 31.4675 41.4483L40.1408 50.5234ZM41.033 49.1611L32.5123 40.2458L32.4165 40.1455L32.2923 40.0837C31.945 39.9106 31.3881 39.7223 30.76 39.6667C30.1298 39.6109 29.3573 39.6836 28.6559 40.1204C28.5532 40.1844 28.3749 40.303 28.1328 40.4677L22.7182 33.0488C22.2225 32.3696 21.311 32.1396 20.5506 32.502L14.2225 35.5179C13.3349 35.2924 11.6765 34.9692 10.4077 35.0957C9.59708 35.1764 8.59824 35.6336 7.76322 36.0867C7.75283 36.0923 7.74245 36.0979 7.73208 36.1036C9.51971 28.0079 16.7612 21.9501 25.4225 21.9501C35.4263 21.9501 43.5361 30.0313 43.5361 40.0001C43.5361 43.3441 42.6235 46.4757 41.033 49.1611ZM45.7605 40.0001C45.7605 51.193 36.6549 60.2667 25.4225 60.2667C14.1901 60.2667 5.08447 51.193 5.08447 40.0001C5.08447 28.8071 14.1901 19.7334 25.4225 19.7334C36.6549 19.7334 45.7605 28.8071 45.7605 40.0001ZM21.4332 33.9801L26.827 41.3706C23.9228 43.3964 18.4112 47.3147 15.0436 49.7162C14.7952 49.3428 14.5508 48.7522 14.6152 47.9825C14.6244 47.8719 14.6769 47.6677 14.8128 47.3544C14.9437 47.0526 15.1313 46.6957 15.368 46.2932C15.8411 45.4883 16.48 44.5514 17.1711 43.5873C17.7165 42.8264 18.3025 42.0386 18.8551 41.2956C19.6712 40.1984 20.4147 39.1989 20.8474 38.5282C21.45 37.594 21.5767 36.4888 21.4863 35.5505C21.4333 35.0004 21.3007 34.4574 21.1081 33.9914L21.2362 33.9304C21.3053 33.8974 21.3882 33.9183 21.4332 33.9801Z"
                fill="#B23D2B"
              />
              <path
                d="M70.6919 47.6348C70.7789 47.5482 70.918 47.4444 71.1267 47.3233C71.5964 47.0983 72.0834 46.6657 72.6227 46.0254C73.1619 45.3851 73.4228 44.3122 73.4402 42.824V33.0467L75.0231 32.9082C75.284 32.8909 75.4927 32.7871 75.6667 32.5621L75.6841 32.5102L75.1101 32.1641L74.9361 32.3372C74.8144 32.4583 74.6578 32.5275 74.4665 32.5448L60.7771 33.5485L61.1598 34.5695L61.7338 33.9292L70.3962 33.2717V44.243L67.7522 44.5372L70.6919 47.6348ZM64.3777 41.6992L66.0824 41.4742V41.9068L67.126 43.2566L68.8481 41.6126V37.321L69.6308 36.3865L67.0043 35.504L66.3259 36.4038C66.2389 36.4904 66.152 36.525 66.0476 36.5423L64.4299 36.698L61.9425 35.8501V42.2529L62.847 43.3778L64.3777 41.6992ZM64.4299 37.1307L66.0824 36.9403V41.0589L64.4299 41.2492V37.1307Z"
                fill="#42231B"
              />
              <path
                d="M88.0863 47.6348C88.1732 47.5482 88.3124 47.4444 88.5211 47.3233C88.9908 47.0983 89.4778 46.6657 90.017 46.0254C90.5563 45.3851 90.8172 44.3122 90.8346 42.824V33.0467L92.4174 32.9082C92.6784 32.8909 92.8871 32.7871 93.061 32.5621L93.0784 32.5102L92.5044 32.1641L92.3305 32.3372C92.2087 32.4583 92.0522 32.5275 91.8608 32.5448L78.1715 33.5485L78.5541 34.5695L79.1282 33.9292L87.7905 33.2717V44.243L85.1466 44.5372L88.0863 47.6348ZM81.7721 41.6992L83.4767 41.4742V41.9068L84.5204 43.2566L86.2425 41.6126V37.321L87.0252 36.3865L84.3986 35.504L83.7203 36.4038C83.6333 36.4904 83.5463 36.525 83.442 36.5423L81.8243 36.698L79.3369 35.8501V42.2529L80.2414 43.3778L81.7721 41.6992ZM81.8243 37.1307L83.4767 36.9403V41.0589L81.8243 41.2492V37.1307Z"
                fill="#42231B"
              />
              <path
                d="M108.681 47.1329C110.003 47.0118 110.821 46.1119 111.186 44.8141L110.247 44.5026L109.899 42.3221L109.064 44.5026L106.855 44.641V39.5707L110.316 39.0861C110.577 39.0342 110.786 38.9131 110.908 38.7054L110.942 38.6535L110.368 38.3247L110.194 38.5151C110.073 38.6362 109.934 38.7227 109.777 38.7573L106.855 39.1553V35.6251L107.429 35.0887L105.254 34.6214C106.629 34.4138 107.794 34.1196 108.768 33.7562L109.69 33.8773L108.281 31.4373L101.358 34.9156C102.28 34.8983 103.167 34.8464 104.037 34.7599V39.5187L100.958 39.9168L101.393 40.9378L101.915 40.2456L104.037 39.9514V44.866C104.037 45.5409 104.28 46.1119 104.75 46.5619C105.22 47.0291 105.794 47.2541 106.437 47.2541L108.681 47.1329ZM97.5488 47.3752C97.6184 47.2887 97.7575 47.2021 97.9489 47.0983C98.3489 46.908 98.7664 46.5273 99.236 45.9735C99.7057 45.4024 99.9492 44.4853 99.9666 43.1874V39.6918L102.263 37.9267L99.9666 38.7054V36.127L101.167 36.0231C101.41 36.0058 101.619 35.902 101.776 35.6943L101.81 35.6251L101.236 35.2963L101.08 35.4521C100.854 35.7117 100.401 35.6597 99.9666 35.7117V32.8044L100.523 32.3891L97.2009 31.6796L97.2879 32.4583V35.8847L95.3049 36.0058L95.6876 37.0268L96.2442 36.3865L97.2879 36.3173V39.588L94.8527 40.4013L96.2094 42.5471L97.2879 41.7338V44.416L95.4267 44.6756L97.5488 47.3752Z"
                fill="#42231B"
              />
              <path
                d="M124.301 47.6867C124.406 47.5829 124.597 47.479 124.858 47.3752C125.293 47.2195 125.745 46.9426 126.197 46.5099C126.65 46.0773 126.876 45.3505 126.876 44.3295V43.62L127.624 43.5681C127.954 43.5508 128.215 43.4124 128.372 43.1701L127.728 42.8067L127.519 42.997C127.345 43.1355 127.137 43.2047 126.876 43.2047V39.7264L127.937 39.6572C128.198 39.6399 128.406 39.5014 128.598 39.2592L128.006 38.9131L127.85 39.0688C127.589 39.3457 127.224 39.3111 126.876 39.3284V36.7673L127.624 35.8674L125.067 34.8291L124.267 35.729C124.18 35.8155 124.075 35.8501 123.953 35.8501L120.266 36.0924L118.961 35.7636C119.396 35.3136 119.779 34.8637 120.127 34.4138L127.415 33.8427C127.658 33.8254 127.867 33.7043 128.024 33.4966L128.076 33.462L127.502 33.0986L127.328 33.2717C127.206 33.4101 127.05 33.4793 126.858 33.4793L120.457 33.9465C120.683 33.6004 120.875 33.2717 121.031 32.9429L121.657 32.5621L118.857 31.42L115.935 38.1517C116.509 37.8229 117.083 37.4421 117.657 36.9749V39.8995L116.422 39.9687L116.822 41.007L117.396 40.3667L117.657 40.3494V44.3468L118.666 45.489L120.214 44.0526L124.006 43.8277V44.9525L121.431 45.2467L124.301 47.6867ZM120.266 40.1763L124.006 39.9168V43.3778L120.266 43.62V40.1763ZM120.266 36.5423L124.006 36.3173V39.5014L120.266 39.7264V36.5423ZM114.387 46.9599C115.134 45.5409 115.778 43.3777 116.3 40.4532L113.186 44.1738C113.117 44.2603 113.047 44.3122 112.995 44.3295C112.943 44.3468 112.717 44.3814 112.317 44.4334L114.387 46.9599ZM115.813 38.6362C114.978 37.719 113.778 37.0441 112.23 36.5942L113.986 40.3494L115.813 38.6362ZM116.961 34.2926C115.969 33.289 114.804 32.5968 113.465 32.216L115.1 35.8847L116.961 34.2926ZM123.519 41.6992C122.788 41.0589 121.901 40.6609 120.84 40.4878L122.11 43.1182L123.519 41.6992ZM123.519 37.9786C122.805 37.3383 121.918 36.9403 120.857 36.7846L122.11 39.3457L123.519 37.9786Z"
                fill="#42231B"
              />
              <path
                d="M133.294 47.6694C135.503 46.9599 137.538 45.9562 139.4 44.6583C140.826 45.8177 142.565 46.7522 144.601 47.4444L145.836 44.243C144.253 43.8969 142.792 43.4643 141.435 42.9624C142.496 41.9068 143.453 40.6609 144.27 39.2073L141.504 37.9613L140.861 39.1034L135.173 39.4668L135.573 40.4878L136.129 39.8302L136.582 39.8129C136.825 41.1108 137.295 42.2356 138.008 43.1874C136.704 44.7795 135.121 46.2677 133.294 47.6694ZM134.129 39.2592C136.356 38.4458 138.582 36.8192 138.582 33.6178V33.2717L140.252 33.1159V35.5213C140.165 37.5979 142.513 38.0824 143.261 38.2036H143.296L145.644 35.4002L143.087 35.6943V33.237L143.766 32.5448L141 31.6277L140.53 32.4064C140.374 32.5968 140.217 32.6833 140.061 32.6833L138.53 32.8563L135.851 31.9738V33.6351C135.851 35.7636 135.277 37.6325 134.129 39.2592ZM131.868 46.4753C132.338 45.662 132.842 44.6237 133.399 43.3951C133.973 42.1491 134.425 40.9724 134.755 39.8821L130.789 43.7238C130.633 43.8796 130.529 43.8969 130.337 43.8969L129.781 43.8796L131.868 46.4753ZM131.85 40.4705L133.625 38.5324C132.738 37.5806 131.503 36.923 129.954 36.5596L131.85 40.4705ZM132.685 36.2135L134.494 34.2234C133.712 33.4274 132.494 32.8044 130.842 32.3718L132.685 36.2135ZM139.104 41.7857C138.252 41.2492 137.591 40.5743 137.086 39.7783L140.6 39.536C140.13 40.2975 139.626 41.0416 139.104 41.7857Z"
                fill="#42231B"
              />
              <path
                d="M153.733 45.7485V42.3914L157.281 42.1491C157.542 42.1318 157.751 42.0107 157.907 41.8203L157.942 41.7511L157.351 41.405L157.177 41.578C157.055 41.6992 156.916 41.7684 156.724 41.7857L153.733 41.976V39.9168L157.281 39.6572C157.542 39.6572 157.768 39.536 157.942 39.2765L157.351 38.9131L157.177 39.0861C157.055 39.2246 156.916 39.2938 156.724 39.3111L153.733 39.4841V37.4941L158.603 37.1999V44.3814L156.15 44.6756L158.899 47.5136C158.986 47.4271 159.142 47.306 159.368 47.1848C159.821 46.9945 160.29 46.6138 160.795 46.0081C161.299 45.4197 161.577 44.416 161.595 42.9797V37.7882L162.238 36.9749L159.542 35.6943L159.003 36.525C158.847 36.6807 158.62 36.7673 158.359 36.7846L153.628 37.0441L153.263 36.9922C153.837 36.2135 154.376 35.3829 154.881 34.5176L162.221 33.9639C162.552 33.9119 162.76 33.7735 162.882 33.5485L162.308 33.2024L162.134 33.3928C162.012 33.4966 161.856 33.5658 161.664 33.5831L155.124 34.0677C155.455 33.462 155.75 32.839 156.029 32.1814L153.106 31.3335C152.776 32.3026 152.393 33.289 151.958 34.2926L148.514 34.5349L148.914 35.5732L149.471 34.9156L151.732 34.7426C150.671 37.2691 149.262 39.6918 147.523 42.028C148.827 41.2665 150.01 40.384 151.071 39.3803V46.6484L152.098 47.6348L153.733 45.7485Z"
                fill="#42231B"
              />
              <path
                d="M176.484 47.6867C176.589 47.5829 176.78 47.479 177.041 47.3752C177.476 47.2195 177.928 46.9426 178.38 46.5099C178.833 46.0773 179.059 45.3505 179.059 44.3295V43.62L179.807 43.5681C180.137 43.5508 180.398 43.4124 180.555 43.1701L179.911 42.8067L179.702 42.997C179.528 43.1355 179.32 43.2047 179.059 43.2047V39.7264L180.12 39.6572C180.381 39.6399 180.589 39.5014 180.781 39.2592L180.189 38.9131L180.033 39.0688C179.772 39.3457 179.407 39.3111 179.059 39.3284V36.7673L179.807 35.8674L177.25 34.8291L176.45 35.729C176.363 35.8155 176.258 35.8501 176.137 35.8501L172.449 36.0924L171.144 35.7636C171.579 35.3136 171.962 34.8637 172.31 34.4138L179.598 33.8427C179.842 33.8254 180.05 33.7043 180.207 33.4966L180.259 33.462L179.685 33.0986L179.511 33.2717C179.389 33.4101 179.233 33.4793 179.041 33.4793L172.64 33.9465C172.866 33.6004 173.058 33.2717 173.214 32.9429L173.84 32.5621L171.04 31.42L168.118 38.1517C168.692 37.8229 169.266 37.4421 169.84 36.9749V39.8995L168.605 39.9687L169.005 41.007L169.579 40.3667L169.84 40.3494V44.3468L170.849 45.489L172.397 44.0526L176.189 43.8277V44.9525L173.614 45.2467L176.484 47.6867ZM172.449 40.1763L176.189 39.9168V43.3778L172.449 43.62V40.1763ZM172.449 36.5423L176.189 36.3173V39.5014L172.449 39.7264V36.5423ZM166.57 46.9599C167.318 45.5409 167.961 43.3777 168.483 40.4532L165.369 44.1738C165.3 44.2603 165.23 44.3122 165.178 44.3295C165.126 44.3468 164.9 44.3814 164.5 44.4334L166.57 46.9599ZM167.996 38.6362C167.161 37.719 165.961 37.0441 164.413 36.5942L166.17 40.3494L167.996 38.6362ZM169.144 34.2926C168.153 33.289 166.987 32.5968 165.648 32.216L167.283 35.8847L169.144 34.2926ZM175.702 41.6992C174.971 41.0589 174.084 40.6609 173.023 40.4878L174.293 43.1182L175.702 41.6992ZM175.702 37.9786C174.988 37.3383 174.101 36.9403 173.04 36.7846L174.293 39.3457L175.702 37.9786Z"
                fill="#42231B"
              />
            </svg>
          </Link>
        </div>
        <div className="p-4">
          <h5 className="font-bold text-xl">博客</h5>
          <ul className="text-base">
            <Link to="/article">
              <li className="mt-4">文章</li>
            </Link>
            <Link to="/album">
              <li className="mt-4">摄影</li>
            </Link>
            <Link to="/video">
              <li className="mt-4">视频</li>
            </Link>
          </ul>
        </div>
        <div className="p-4">
          <h5 className="font-bold text-xl">关于</h5>
          <ul className="text-base">
            <Link to="/changelog">
              <li className="mt-4">本站</li>
            </Link>
            <li className="mt-4">简历</li>
            <li className="mt-4">联系我</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-20 items-center h-20">
        <p>2022 © All Right Reserved</p>
        <p>备案信息</p>
        <ul className="flex p-2">
          <li className="m-1">
            <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzIxOTM1NzIzNw==&hid=1&sn=173a6a61a9cafb6ac2e7d36ee0efe411&scene=18#wechat_redirect" target="_blank" rel="noreferrer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#07C160" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8349 7.77337C16.1006 6.26341 14.243 4.971 12.1399 4.9707C11.0363 4.97041 9.35037 5.34927 8.09051 6.8727C7.24918 7.88999 6.96592 9.08059 7.14322 10.2679C7.26502 11.0837 7.71935 12.1599 8.36948 12.8406C8.61455 11.1149 9.52352 9.75765 10.7153 8.76004C12.8671 7.11614 15.1644 7.20923 16.8349 7.77337ZM18.5138 10.3623C17.1972 8.65377 14.9214 8.17576 12.867 8.93762L12.8839 8.94271L12.8839 8.94272C12.9445 8.96097 13.0051 8.97919 13.0654 8.99963C16.1071 10.0359 17.751 13.3356 16.7373 16.3698C16.4675 17.1769 16.0356 17.8828 15.4916 18.4664C16.1469 18.2849 16.8176 18.0255 17.393 17.5821C19.7095 15.7972 20.1655 12.5059 18.5138 10.3623ZM10.7935 15.6711C11.2241 15.7673 11.6718 15.8205 12.134 15.8205C13.5411 15.8205 14.6556 15.4931 15.7083 14.7187C15.681 15.1567 15.5493 15.684 15.4289 15.9945C14.4381 18.5511 11.5697 19.6592 8.56367 18.672C5.94984 17.8135 4.34812 14.7486 5.07994 12.1902C5.27618 11.5046 5.47671 11.0343 5.8532 10.4424C6.07903 12.0917 7.1058 13.6957 8.60274 14.7166C8.71655 14.7933 8.79439 14.9213 8.80075 15.0694C8.80283 15.1187 8.79424 15.1649 8.78329 15.2128L8.532 16.3534C8.52907 16.367 8.52561 16.3807 8.52212 16.3946C8.51188 16.4353 8.50138 16.477 8.50314 16.5185C8.50847 16.6417 8.61206 16.7377 8.73475 16.7324C8.78299 16.7303 8.82147 16.7105 8.86128 16.6852L10.2817 15.7746C10.3886 15.7061 10.503 15.662 10.6305 15.6565C10.6868 15.654 10.7409 15.6603 10.7935 15.6711Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li className="m-1">
            <a href="https://www.xiaohongshu.com/user/profile/5f6fea97000000000101e7d9" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E63F4A" />
                <path d="M5.60215 14.0852H4.84565C4.84565 14.9692 5.59345 15.0474 5.59345 15.0474H5.97605C6.74416 15.0474 6.77604 14.1692 6.77604 14.1692V8.93457H5.60215V14.0852Z" fill="white" />
                <path d="M3.64569 10.4997H4.84566C4.84566 10.4997 4.86304 14.0648 4.0109 14.43L3.36743 13.2513C3.36743 13.2513 3.75004 12.0649 3.64569 10.4997Z" fill="white" />
                <path d="M7.54125 10.4997H8.74122C8.63687 12.0649 9.01946 13.2513 9.01946 13.2513L8.37601 14.43C7.52386 14.0648 7.54125 10.4997 7.54125 10.4997Z" fill="white" />
                <path d="M10.4216 11.578H9.6397C9.08318 11.5548 9.43101 10.8707 9.43101 10.8707L10.3933 8.93457H11.5179L10.7101 10.4752C10.6726 10.5487 10.726 10.636 10.8086 10.636H10.8831L10.9498 10.4997H12.0744L11.1044 12.3998C11.0668 12.4733 11.1202 12.5606 11.2028 12.5606H11.8512L11.3324 13.5026H10.0339C9.4774 13.4793 9.82522 12.7953 9.82522 12.7953L10.4216 11.578Z" fill="white" />
                <path d="M9.81071 13.8823C9.81071 13.8823 9.6672 13.8953 9.57155 13.7997L8.98902 14.9214C8.98902 14.9214 9.08469 15.0518 9.28029 15.0518H10.7237L11.3411 13.8823H9.81071Z" fill="white" />
                <path d="M14.9149 10.4997H14.1729V13.92H15.2975V15.0474H11.3411L11.9005 13.92H13.0135V10.4997H12.2599V9.30555H14.9149V10.4997Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4916 11.3809H19.355V10.6083C19.355 9.88501 18.7686 9.29873 18.0454 9.29873H17.5931V8.93457H16.4453V9.29873H15.7247V10.4697H16.4453V11.3809H15.2975V12.5519H16.4453V15.0474H17.5931V12.5519H19.1727C19.3279 12.5519 19.4539 12.6778 19.4539 12.8331V14.0627H18.3591C18.3591 14.6065 18.8 15.0474 19.3438 15.0474H19.6401C20.184 15.0474 20.6249 14.6065 20.6249 14.0627V12.5142C20.6249 11.8883 20.1175 11.3809 19.4916 11.3809ZM17.5931 10.4697H18.0055C18.1041 10.4697 18.1841 10.5495 18.1841 10.6482V11.3809H17.5931V10.4697Z" fill="white" />
                <path d="M20.0395 9.30555C20.3532 9.30555 20.6075 9.55995 20.6075 9.87367C20.6075 10.1874 20.3532 10.4418 20.0395 10.4418H19.4713V9.87367C19.4713 9.55995 19.7257 9.30555 20.0395 9.30555Z" fill="white" />
              </svg>
            </a>
          </li>
          <li className="m-1">
            <a href="https://github.com/Darmau" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#231E1B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9771 4.5C7.84862 4.5 4.5 7.942 4.5 12.1856C4.5 15.5804 6.65596 18.4566 9.59174 19.4939C9.95872 19.5411 10.0963 19.3053 10.0963 19.1167C10.0963 18.9281 10.0963 18.4566 10.0963 17.7965C8.03211 18.268 7.57339 16.7592 7.57339 16.7592C7.25229 15.8633 6.74771 15.6275 6.74771 15.6275C6.05963 15.156 6.79358 15.156 6.79358 15.156C7.52752 15.2032 7.94037 15.9576 7.94037 15.9576C8.62844 17.1364 9.68349 16.8063 10.0963 16.6177C10.1422 16.0991 10.3716 15.769 10.555 15.5804C8.90367 15.3918 7.16055 14.7317 7.16055 11.7612C7.16055 10.9125 7.43578 10.2524 7.94037 9.68657C7.8945 9.54512 7.61927 8.74356 8.03211 7.70624C8.03211 7.70624 8.67431 7.51764 10.0963 8.5078C10.6927 8.3192 11.3349 8.27205 11.9771 8.27205C12.6193 8.27205 13.2615 8.36635 13.8578 8.5078C15.2798 7.51764 15.922 7.70624 15.922 7.70624C16.3349 8.74356 16.0596 9.54512 16.0138 9.73372C16.4725 10.2524 16.7936 10.9596 16.7936 11.8083C16.7936 14.7788 15.0505 15.3918 13.3991 15.5804C13.6743 15.8162 13.9037 16.2877 13.9037 16.9949C13.9037 18.0322 13.9037 18.8338 13.9037 19.1167C13.9037 19.3053 14.0413 19.5411 14.4083 19.4939C17.3899 18.4566 19.5 15.5804 19.5 12.1856C19.4541 7.942 16.1055 4.5 11.9771 4.5Z" fill="white" />
              </svg>

            </a>
          </li>
          <li className="m-1">
            <a href="https://space.bilibili.com/408764400" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#00A1D6" />
                <path d="M19.7149 14.8619C19.6344 14.8619 19.5658 14.8683 19.4984 14.8606C19.3619 14.8449 19.2253 14.8479 19.0885 14.8438C19.0003 14.8415 19.0029 14.8415 18.9954 14.7559C18.9736 14.4947 18.9497 14.2338 18.9263 13.9729C18.906 13.7437 18.8867 13.5142 18.8643 13.2853C18.844 13.0754 18.8196 12.8661 18.7974 12.6565C18.7764 12.4595 18.7568 12.2623 18.735 12.0655C18.7072 11.8179 18.6786 11.5704 18.6491 11.323C18.6226 11.1044 18.5964 10.8852 18.567 10.6669C18.5211 10.3283 18.4741 9.98986 18.4261 9.65158C18.3747 9.29114 18.313 8.93252 18.2484 8.5744C18.2369 8.51021 18.2384 8.50789 18.2996 8.49757C18.5542 8.454 18.81 8.41687 19.069 8.42255C19.097 8.42332 19.1253 8.42384 19.1531 8.42745C19.1986 8.43312 19.2222 8.45529 19.2248 8.5084C19.2338 8.69352 19.2467 8.87863 19.2603 9.06349C19.2822 9.36643 19.3058 9.66937 19.3284 9.97205C19.3428 10.167 19.3552 10.3614 19.3698 10.5558C19.3932 10.8682 19.4179 11.1805 19.4416 11.4929C19.456 11.684 19.4686 11.8755 19.4832 12.0666C19.5056 12.3471 19.53 12.6273 19.5527 12.9076C19.5671 13.086 19.5799 13.2647 19.5951 13.4431C19.6175 13.7073 19.6416 13.9716 19.6645 14.2359C19.6818 14.4421 19.6974 14.6489 19.7149 14.8619ZM9.85908 8.42538C9.89636 8.42538 9.95268 8.42126 10.0082 8.42641C10.0789 8.43286 10.0926 8.45116 10.0969 8.52232C10.1172 8.84769 10.1363 9.17332 10.1579 9.49895C10.1815 9.8501 10.2075 10.2007 10.2335 10.5514C10.2574 10.8734 10.2813 11.1954 10.307 11.5174C10.3351 11.8712 10.3662 12.2244 10.3945 12.5781C10.4158 12.8491 10.4341 13.12 10.4562 13.3913C10.4773 13.6429 10.5019 13.894 10.5246 14.1454C10.5439 14.3617 10.5634 14.5783 10.5822 14.7948C10.5881 14.8634 10.5832 14.8678 10.5094 14.866C10.3163 14.8614 10.1242 14.8387 9.93108 14.8441C9.88685 14.8454 9.87399 14.825 9.86653 14.783C9.85059 14.6914 9.85316 14.5984 9.84339 14.5058C9.8169 14.2611 9.80173 14.0154 9.77936 13.7703C9.7593 13.5475 9.73513 13.3253 9.71225 13.1028C9.69193 12.8993 9.67188 12.6959 9.65027 12.4922C9.62867 12.2924 9.60579 12.0924 9.58316 11.8923C9.56233 11.7082 9.54202 11.5241 9.5199 11.34C9.48724 11.0704 9.45484 10.8007 9.41936 10.5315C9.3867 10.2845 9.34967 10.0383 9.31496 9.79157C9.26764 9.45641 9.21441 9.12201 9.15553 8.78891C9.14207 8.71348 9.12784 8.63819 9.11284 8.56306C9.10513 8.52516 9.11207 8.50324 9.15527 8.49731C9.26893 8.4821 9.38233 8.45838 9.4965 8.4473C9.61067 8.43673 9.72485 8.41533 9.85908 8.42538ZM17.946 11.676C18.1636 11.676 18.1687 11.6775 18.2037 11.8737C18.2466 12.1158 18.2767 12.36 18.3053 12.6041C18.3353 12.8643 18.3657 13.1244 18.3935 13.3848C18.4158 13.5944 18.4346 13.8045 18.4557 14.0142C18.4778 14.2338 18.5012 14.4527 18.5241 14.6721C18.5367 14.7961 18.5485 14.9201 18.5627 15.0439C18.5668 15.0797 18.556 15.0988 18.5208 15.1029C18.4464 15.1114 18.3726 15.1212 18.2986 15.1292C18.1628 15.1439 18.0268 15.1584 17.8907 15.171C17.8205 15.1774 17.8159 15.1736 17.8028 15.1055C17.6835 14.488 17.5639 13.8711 17.4456 13.2533C17.3669 12.8426 17.2903 12.4317 17.2132 12.0209C17.2028 11.9644 17.1932 11.9078 17.1844 11.851C17.1792 11.8186 17.188 11.7977 17.2247 11.7889C17.4698 11.7314 17.7174 11.6871 17.946 11.676ZM8.80607 11.676C9.03878 11.676 9.03775 11.6768 9.07375 11.8884C9.1293 12.2161 9.16864 12.5456 9.20387 12.8761C9.23833 13.1969 9.27587 13.5173 9.30956 13.8381C9.33244 14.0575 9.35044 14.2774 9.37179 14.4965C9.38696 14.6525 9.40496 14.808 9.42142 14.9637C9.42347 14.9828 9.4245 15.0019 9.42579 15.0212C9.42913 15.0975 9.42579 15.1037 9.3525 15.1112C9.20721 15.1264 9.06167 15.139 8.91638 15.1535C8.86367 15.1586 8.81121 15.1664 8.75901 15.1715C8.68958 15.178 8.68727 15.1777 8.67364 15.1073C8.62478 14.8601 8.57747 14.6123 8.52964 14.365C8.41495 13.7695 8.29898 13.1744 8.18506 12.5789C8.13955 12.3406 8.10046 12.1014 8.05572 11.8629C8.04749 11.8193 8.05366 11.799 8.09866 11.7884C8.34141 11.7317 8.58569 11.6873 8.80607 11.676ZM11.8777 14.1732V15.1728C11.8777 15.1823 11.8766 15.1921 11.8779 15.2017C11.8828 15.2501 11.8651 15.2715 11.8152 15.2695C11.7496 15.2666 11.6845 15.2684 11.619 15.27C11.4822 15.2726 11.3451 15.2672 11.2086 15.2829C11.133 15.2917 11.1345 15.287 11.1271 15.2071C11.1047 14.9555 11.0803 14.7041 11.0574 14.4524C11.0363 14.2202 11.0173 13.9873 10.9957 13.755C10.9738 13.516 10.9494 13.2778 10.9273 13.0391C10.9121 12.8797 10.8987 12.7207 10.8853 12.5613C10.8679 12.354 10.8517 12.147 10.8334 11.9397C10.8257 11.8523 10.8321 11.84 10.9185 11.8309C11.1414 11.8063 11.3659 11.7993 11.5899 11.81C11.6457 11.8131 11.7013 11.824 11.7553 11.8371C11.8234 11.8534 11.8309 11.8634 11.8345 11.9348C11.8419 12.0787 11.8494 12.2226 11.8532 12.3667C11.8576 12.5268 11.854 12.6872 11.8599 12.8473C11.8748 13.2889 11.8725 13.7311 11.8777 14.1732ZM20.9994 14.2186V15.1651C20.9994 15.181 20.9989 15.197 20.9996 15.2133C21.003 15.2548 20.9837 15.2695 20.9443 15.2692C20.8477 15.2685 20.7512 15.2692 20.6548 15.2705C20.5458 15.2715 20.437 15.271 20.3282 15.2829C20.2565 15.2911 20.256 15.2857 20.2495 15.2143C20.22 14.8866 20.1889 14.5589 20.159 14.2307C20.1318 13.9283 20.1066 13.6256 20.0788 13.3229C20.0503 13.0107 20.0191 12.6993 19.9911 12.3873C19.9772 12.2311 19.9656 12.0748 19.9541 11.9186C19.9494 11.8505 19.9569 11.8384 20.0335 11.8322C20.1667 11.8217 20.2994 11.8036 20.4337 11.8059C20.5674 11.8085 20.7013 11.801 20.8343 11.8265C20.9469 11.8482 20.9526 11.8547 20.9593 11.9753C20.9785 12.3303 20.9726 12.6864 20.9852 13.0414C20.9981 13.4194 20.9891 13.7973 20.9994 14.2186ZM17.719 9.95838C17.7977 9.96302 17.8596 9.95916 17.9213 9.97282C17.9607 9.98184 17.9805 9.99963 17.9843 10.0419C18.0029 10.2453 18.0229 10.449 18.0432 10.6527C18.0594 10.818 18.0767 10.9832 18.0934 11.1485L18.0949 11.158C18.1083 11.2622 18.1052 11.265 18.0041 11.2707C17.9141 11.2756 17.8244 11.2836 17.7344 11.289C17.6753 11.2926 17.6565 11.3027 17.6467 11.2163C17.613 10.9115 17.5739 10.6076 17.5367 10.3031C17.5263 10.2175 17.5148 10.1321 17.5022 10.0468C17.4947 9.9986 17.5135 9.97205 17.5585 9.96818C17.6177 9.96277 17.6768 9.96122 17.719 9.95838ZM8.60858 9.95967C8.66927 9.96302 8.73175 9.95838 8.79295 9.97256C8.82792 9.98056 8.84567 9.99525 8.84901 10.0352C8.85647 10.1306 8.87112 10.2257 8.88012 10.3211C8.90867 10.6138 8.93567 10.9066 8.96241 11.1995C8.96807 11.2632 8.96678 11.2645 8.90738 11.2689C8.80195 11.2766 8.69627 11.2844 8.59058 11.2887C8.52912 11.2916 8.52141 11.2841 8.51369 11.2212C8.48695 11.0056 8.46175 10.7899 8.43604 10.5741C8.41521 10.3962 8.39772 10.2183 8.37252 10.0409C8.36558 9.9919 8.38152 9.97849 8.42061 9.9705C8.48258 9.95787 8.54481 9.96199 8.60858 9.95967ZM11.817 10.7656C11.817 10.951 11.8175 11.1361 11.8167 11.3217C11.8167 11.405 11.8157 11.4055 11.7331 11.4045C11.6338 11.405 11.5346 11.3999 11.4359 11.389C11.3721 11.381 11.3708 11.3831 11.369 11.3153C11.3626 11.0887 11.3559 10.862 11.3513 10.6354C11.3479 10.482 11.3461 10.3291 11.3369 10.1757C11.332 10.0966 11.3364 10.0958 11.4122 10.0948C11.5241 10.0935 11.6357 10.0986 11.7468 10.1157C11.8136 10.126 11.8167 10.126 11.817 10.2002C11.8175 10.3887 11.8175 10.5772 11.8175 10.7659H11.817V10.7656ZM20.9433 10.7705C20.9433 10.9561 20.9438 11.1415 20.9431 11.3269C20.9431 11.4048 20.9418 11.4053 20.8639 11.4048C20.7615 11.4038 20.6593 11.399 20.5573 11.3903C20.5067 11.3864 20.4918 11.3651 20.4951 11.3189C20.4956 11.3125 20.4951 11.306 20.4951 11.2996C20.4874 10.9417 20.4797 10.5841 20.4725 10.2263C20.4722 10.2072 20.4712 10.1881 20.472 10.1688C20.473 10.0966 20.4733 10.0948 20.5455 10.0953C20.645 10.0958 20.7438 10.101 20.843 10.1108C20.9641 10.1229 20.9428 10.1378 20.9433 10.2337C20.9438 10.4124 20.9436 10.5916 20.9433 10.7705ZM8.35889 11.2057C8.36121 11.3076 8.36121 11.3073 8.26401 11.331C8.19792 11.3473 8.13183 11.3651 8.06523 11.3797C8.0084 11.3926 7.99837 11.3854 7.9886 11.3295C7.92072 10.95 7.85309 10.5702 7.78572 10.1904C7.77209 10.1118 7.77569 10.1069 7.85283 10.0932C7.94772 10.0765 8.04235 10.06 8.13723 10.0453C8.19766 10.0357 8.20538 10.0391 8.21746 10.1059C8.24138 10.2407 8.26401 10.3761 8.28175 10.5119C8.30926 10.7269 8.33189 10.9427 8.35658 11.158C8.35863 11.1737 8.35812 11.19 8.35889 11.2057ZM16.9126 10.1041C17.0368 10.0837 17.162 10.0631 17.2872 10.0432C17.3322 10.0362 17.3459 10.0646 17.3518 10.1048C17.3731 10.2533 17.3999 10.4008 17.4173 10.5496C17.4431 10.7651 17.4783 10.9796 17.485 11.197C17.4855 11.2191 17.4852 11.2418 17.4857 11.264C17.487 11.2985 17.4698 11.3163 17.4379 11.3238C17.3531 11.3429 17.2682 11.362 17.1836 11.3823C17.143 11.3921 17.1293 11.3748 17.1227 11.3351C17.0972 11.1841 17.0679 11.0338 17.0419 10.8832C16.9979 10.6352 16.9553 10.3869 16.9126 10.1386C16.9115 10.1296 16.9126 10.12 16.9126 10.1041ZM11.2003 10.9747C11.1967 11.1067 11.2047 11.2217 11.1867 11.3367C11.1813 11.373 11.1708 11.3965 11.1317 11.3999C11.0479 11.4068 10.9643 11.4135 10.881 11.422C10.8406 11.4264 10.8293 11.4089 10.8226 11.3692C10.8038 11.2519 10.8072 11.133 10.7959 11.0152C10.7745 10.7927 10.7655 10.5686 10.7511 10.3454C10.7475 10.291 10.7421 10.2371 10.7377 10.1827C10.7354 10.1523 10.7475 10.1352 10.7799 10.134C10.8884 10.1296 10.9964 10.1097 11.1055 10.1136C11.1692 10.1159 11.1746 10.12 11.1793 10.1845C11.1821 10.2291 11.1813 10.2742 11.1823 10.3191L11.2003 10.9747ZM20.3228 10.8468C20.3228 11.0005 20.3246 11.1542 20.3226 11.3078C20.3213 11.3877 20.3123 11.3947 20.2369 11.4017C20.1624 11.4086 20.0883 11.4143 20.014 11.4223C19.9721 11.4267 19.9525 11.4143 19.95 11.3661C19.9392 11.1619 19.9245 10.9577 19.9104 10.7538C19.8993 10.5846 19.8867 10.4158 19.8749 10.2469C19.8736 10.2275 19.8746 10.2082 19.8733 10.1891C19.8715 10.1554 19.8818 10.1355 19.9196 10.1342C20.0251 10.1306 20.1297 10.1102 20.2359 10.1141C20.3007 10.1164 20.3017 10.1175 20.3066 10.185C20.3223 10.4052 20.3239 10.6259 20.3228 10.8468ZM8.04749 13.5934C8.18069 13.7403 8.18738 13.9144 8.1434 14.0964C8.09918 14.2784 7.99837 14.4285 7.87623 14.5631C7.67129 14.7879 7.42366 14.9539 7.16034 15.0949C6.70699 15.3378 6.22639 15.4992 5.72495 15.5946C5.36418 15.6629 5.00109 15.7155 4.63414 15.7356C4.52229 15.7418 4.41069 15.747 4.29883 15.7462C4.21783 15.7462 4.13657 15.7485 4.05583 15.7457C3.98717 15.7431 3.97714 15.7312 3.97148 15.6593C3.95065 15.4012 3.93291 15.1429 3.91002 14.8848C3.88328 14.5857 3.85191 14.2869 3.82311 13.9879C3.80202 13.7715 3.78377 13.5547 3.76062 13.3389C3.73388 13.0847 3.70379 12.831 3.67448 12.5768C3.64774 12.3422 3.62202 12.1071 3.59374 11.8722C3.56211 11.612 3.52945 11.3524 3.49474 11.0928C3.46076 10.8428 3.42536 10.5929 3.38853 10.3433C3.32867 9.93246 3.26353 9.52241 3.1931 9.11325C3.13612 8.77963 3.07268 8.44715 3.00282 8.116C2.99356 8.07165 3.00693 8.05386 3.04576 8.03762C3.41785 7.88293 3.78865 7.7254 4.16048 7.56993C4.22966 7.54106 4.30063 7.51682 4.37417 7.50316C4.42509 7.49362 4.4382 7.50419 4.43666 7.5555C4.4328 7.68673 4.4382 7.81847 4.42534 7.94919C4.42221 7.98425 4.42049 8.01943 4.4202 8.05464C4.41429 8.52516 4.40863 8.99594 4.42097 9.46672C4.43177 9.87923 4.45337 10.2915 4.47729 10.7037C4.49606 11.0291 4.52306 11.3545 4.55083 11.6793C4.57809 11.9977 4.61126 12.3156 4.64237 12.634C4.64829 12.6946 4.65369 12.7003 4.72235 12.691C4.85764 12.6706 4.99415 12.6593 5.13095 12.6572C5.55601 12.6562 5.97413 12.7147 6.38762 12.813C6.74942 12.8991 7.10145 13.0138 7.43883 13.1742C7.60597 13.2536 7.76591 13.3454 7.91172 13.4619C7.96135 13.5011 8.00557 13.5462 8.04749 13.5934ZM17.1052 13.516C17.2697 13.6607 17.3297 13.8378 17.2829 14.057C17.244 14.2377 17.1561 14.3895 17.0388 14.5254C16.8506 14.7438 16.622 14.9098 16.3746 15.0485C15.8896 15.3208 15.373 15.4977 14.8299 15.5997C14.5335 15.6561 14.2345 15.698 13.9341 15.725C13.7638 15.7397 13.5928 15.7581 13.4018 15.7462H13.1786C13.1351 15.7462 13.1104 15.7325 13.1068 15.6807C13.0904 15.4543 13.0713 15.2282 13.051 15.0021C13.0294 14.7634 13.0055 14.5246 12.9829 14.2859C12.9623 14.0665 12.9433 13.8466 12.9209 13.6272C12.9003 13.4204 12.8767 13.2141 12.8543 13.0076C12.8335 12.8137 12.8134 12.6199 12.7905 12.4262C12.763 12.1916 12.734 11.957 12.7049 11.7224C12.6776 11.5035 12.6506 11.2849 12.6216 11.0662C12.5907 10.8319 12.5581 10.5978 12.5239 10.3639C12.4781 10.0605 12.429 9.75806 12.3806 9.45512C12.3132 9.02612 12.2352 8.59887 12.1466 8.17375C12.143 8.15493 12.1412 8.13559 12.1356 8.11729C12.1222 8.07604 12.1351 8.05412 12.1754 8.03814C12.5707 7.88319 12.9533 7.69627 13.3521 7.54879C13.4043 7.5292 13.4571 7.50728 13.5134 7.50161C13.564 7.49646 13.5769 7.50471 13.572 7.55885C13.5452 7.85251 13.5607 8.14771 13.5468 8.44163C13.5355 8.6814 13.5368 8.92194 13.5489 9.16198C13.5517 9.22282 13.554 9.28392 13.5535 9.34451C13.5504 9.63276 13.5656 9.92074 13.5802 10.2085C13.599 10.5888 13.6265 10.9683 13.6545 11.348C13.6749 11.6221 13.7013 11.8956 13.7271 12.1694C13.7407 12.3192 13.7553 12.4688 13.7739 12.6178C13.7839 12.7 13.788 12.7008 13.8685 12.69C14.0104 12.6707 14.1526 12.6549 14.2961 12.657C14.7996 12.6634 15.2931 12.7431 15.7773 12.8815C16.1051 12.9749 16.4242 13.0914 16.7256 13.2546C16.8616 13.3271 16.9889 13.4148 17.1052 13.516ZM5.47835 14.9364C5.66453 14.8472 6.56839 14.1389 6.64013 14.0234C6.20144 13.8339 5.76121 13.6578 5.28781 13.5137L5.47835 14.9364ZM15.7446 14.0698C15.7678 14.0448 15.7652 14.0255 15.7338 14.0116C15.6713 13.983 15.6094 13.9525 15.5461 13.9265C15.2085 13.788 14.8693 13.654 14.5214 13.5447C14.491 13.5354 14.4599 13.5142 14.4211 13.5323L14.6085 14.9302C14.6363 14.9364 14.6471 14.9235 14.6595 14.9147C14.9755 14.6822 15.2936 14.4524 15.597 14.2024C15.6482 14.1606 15.6988 14.1186 15.7446 14.0698Z" fill="white" />
              </svg>

            </a>
          </li>
          <li className="m-1">
            <a href="https://twitter.com/herac1es" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#1DA1F2" />
                <path d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z" fill="white" />
              </svg>

            </a>
          </li>
          <li className="m-1">
            <a href="https://www.youtube.com/channel/UCDWxwLxTQq0TmsaK1XWVYhQ" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E63223" />
                <path d="M19.125 8.34375C18.9375 7.6875 18.4688 7.21875 17.8125 7.03125C16.6875 6.75 11.9062 6.75 11.9062 6.75C11.9062 6.75 7.21876 6.75 6.00001 7.03125C5.34376 7.21875 4.875 7.6875 4.6875 8.34375C4.5 9.5625 4.5 12 4.5 12C4.5 12 4.5 14.4375 4.78125 15.6562C4.96875 16.3125 5.4375 16.7812 6.09375 16.9687C7.21875 17.25 12 17.25 12 17.25C12 17.25 16.6875 17.25 17.9062 16.9687C18.5625 16.7812 19.0313 16.3125 19.2188 15.6562C19.5 14.4375 19.5 12 19.5 12C19.5 12 19.5 9.5625 19.125 8.34375ZM10.5 14.25V9.75L14.4375 12L10.5 14.25Z" fill="white" />
              </svg>

            </a>
          </li>
          <li className="m-1">
            <a href="https://figma.com/@darmau" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="black" />
                <path d="M11.9873 12C11.9873 10.7574 12.9947 9.75 14.2373 9.75C15.4799 9.75 16.4873 10.7574 16.4873 12C16.4873 13.2427 15.4799 14.25 14.2373 14.25C12.9947 14.25 11.9873 13.2427 11.9873 12Z" fill="#1ABCFE" />
                <path d="M7.4873 16.5C7.4873 15.2574 8.49467 14.25 9.73732 14.25H11.9873V16.5C11.9873 17.7427 10.98 18.75 9.73732 18.75C8.49467 18.75 7.4873 17.7427 7.4873 16.5Z" fill="#0ACF83" />
                <path d="M11.9873 5.25V9.75001H14.2373C15.48 9.75001 16.4873 8.74265 16.4873 7.50001C16.4873 6.25736 15.48 5.25 14.2373 5.25H11.9873Z" fill="#FF7262" />
                <path d="M7.4873 7.50001C7.4873 8.74266 8.49467 9.75001 9.73732 9.75001H11.9873V5.25H9.73732C8.49467 5.25 7.4873 6.25736 7.4873 7.50001Z" fill="#F24E1E" />
                <path d="M7.4873 12C7.4873 13.2427 8.49467 14.25 9.73732 14.25H11.9873V9.75H9.73732C8.49467 9.75 7.4873 10.7574 7.4873 12Z" fill="#A259FF" />
              </svg>

            </a>
          </li>
          <li className="m-1">
            <a href="https://dribbble.com/darmau" target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#EA4C89" />
                <path d="M12 3.75C7.446 3.75 3.75 7.446 3.75 12C3.75 16.554 7.446 20.25 12 20.25C16.5375 20.25 20.25 16.554 20.25 12C20.25 7.446 16.5375 3.75 12 3.75ZM17.445 7.545C18.435 8.7495 19.0125 10.2675 19.0455 11.934C18.8145 11.8845 16.488 11.4225 14.145 11.703C14.0955 11.5875 14.046 11.4555 13.9965 11.34C13.848 10.9935 13.6995 10.647 13.5345 10.317C16.1085 9.2775 17.2965 7.743 17.445 7.545ZM12 4.971C13.782 4.971 15.432 5.6475 16.6695 6.7365C16.5375 6.918 15.4815 8.337 12.9735 9.2775C11.8185 7.149 10.5315 5.4165 10.35 5.1525C10.878 5.037 11.4225 4.971 12 4.971ZM8.997 5.631C9.1785 5.8785 10.4325 7.6275 11.604 9.7065C8.304 10.581 5.4 10.5645 5.0865 10.5645C5.565 8.37 7.0335 6.555 8.997 5.631ZM4.9545 12.0165C4.9545 11.9505 4.9545 11.868 4.9545 11.802C5.2515 11.8185 8.6835 11.8515 12.198 10.7955C12.396 11.1915 12.594 11.5875 12.7755 12C12.693 12.033 12.594 12.0495 12.495 12.0825C8.865 13.254 6.9345 16.455 6.7695 16.719C5.631 15.465 4.9545 13.815 4.9545 12.0165ZM12 19.0455C10.3665 19.0455 8.865 18.4845 7.677 17.5605C7.809 17.2965 9.228 14.541 13.2045 13.155C13.221 13.1385 13.2375 13.1385 13.254 13.1385C14.244 15.7125 14.6565 17.8575 14.7555 18.4845C13.914 18.8475 12.9735 19.0455 12 19.0455ZM15.927 17.841C15.861 17.412 15.4815 15.3495 14.5575 12.825C16.7685 12.4785 18.699 13.056 18.9465 13.122C18.633 15.0855 17.511 16.785 15.927 17.841Z" fill="white" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
