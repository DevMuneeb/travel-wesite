import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './NavBar.css'; // You can create a CSS file for styling
import Hero from './Hero';

const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
            <svg width="135" height="28" viewBox="0 0 135 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M0 9.33551V14.26C1.69031 14.2588 3.36427 14.5895 4.92608 15.2331C6.4879 15.8766 7.90692 16.8205 9.10195 18.0106C10.2967 19.2003 11.2442 20.6128 11.8902 22.1672C12.5363 23.7217 12.8683 25.3877 12.8672 27.07H17.8102C17.8057 22.3685 15.9279 17.8608 12.589 14.536C9.24998 11.2112 4.7225 9.34088 0 9.33551H0Z" fill="#11142D"/>
<path id="Vector_2" d="M24.7197 0.470001H16.8862C20.849 2.97014 24.2069 6.31256 26.7187 10.2574V2.4587C26.7184 1.93114 26.5076 1.42531 26.1327 1.05239C25.7579 0.679479 25.2497 0.470001 24.7197 0.470001Z" fill="#11142D"/>
<path id="Vector_3" d="M4.92188 0.470001H0V4.9038C5.90327 4.90992 11.563 7.24722 15.7373 11.4028C19.9116 15.5585 22.2595 21.193 22.2659 27.07H26.7188V22.17C25.712 16.7846 23.0906 11.8289 19.1999 7.95545C15.3091 4.08199 10.3313 1.47231 4.92188 0.470001Z" fill="#11142D"/>
<path id="Vector_4" d="M38.8341 3.3981H35.6968V19.1411H38.8341V3.3981Z" fill="#11142D"/>
<path id="Vector_5" d="M50.37 10.2189C49.8477 9.74624 49.2363 9.38149 48.5714 9.14581C47.143 8.64646 45.5863 8.64646 44.1579 9.14581C43.4926 9.38132 42.881 9.74609 42.3586 10.2189C41.8462 10.6892 41.4369 11.2597 41.1562 11.8947C40.8661 12.5875 40.7168 13.3306 40.7168 14.0812C40.7168 14.8317 40.8661 15.5748 41.1562 16.2676C41.4358 16.9045 41.8452 17.4765 42.3586 17.9476C42.8801 18.4208 43.4914 18.7854 44.1565 19.02C45.5847 19.5203 47.1417 19.5203 48.57 19.02C49.2353 18.7854 49.8468 18.4208 50.3686 17.9476C50.8817 17.4764 51.2911 16.9043 51.5709 16.2676C51.861 15.5748 52.0103 14.8317 52.0103 14.0812C52.0103 13.3306 51.861 12.5875 51.5709 11.8947C51.2905 11.2599 50.8817 10.6894 50.37 10.2189ZM48.2156 15.9351C47.7076 16.3907 47.048 16.6428 46.3643 16.6428C45.6805 16.6428 45.021 16.3907 44.5129 15.9351C44.0859 15.4103 43.8529 14.7555 43.8529 14.0801C43.8529 13.4047 44.0859 12.7499 44.5129 12.2251C45.021 11.7695 45.6805 11.5174 46.3643 11.5174C47.048 11.5174 47.7076 11.7695 48.2156 12.2251C48.6426 12.7499 48.8756 13.4047 48.8756 14.0801C48.8756 14.7555 48.6426 15.4103 48.2156 15.9351Z" fill="#11142D"/>
<path id="Vector_6" d="M61.633 10.354H61.5936C61.4485 10.1512 61.28 9.96609 61.0916 9.8024C60.8633 9.60136 60.6105 9.42968 60.3392 9.2914C59.6535 8.94111 58.8923 8.76258 58.1216 8.7713C57.4462 8.75953 56.7783 8.91339 56.1767 9.2193C55.6162 9.50826 55.1213 9.90877 54.7227 10.396C54.3162 10.8982 54.0044 11.4695 53.8023 12.0823C53.5874 12.7136 53.4779 13.3757 53.4782 14.0423C53.4702 14.7578 53.5907 15.469 53.8339 16.1423C54.0543 16.7568 54.3978 17.3202 54.8436 17.7985C55.2878 18.2665 55.8268 18.6352 56.4249 18.88C57.0753 19.1439 57.7723 19.2748 58.4746 19.265C58.994 19.2561 59.5075 19.1539 59.9905 18.9633C60.5321 18.7588 61.0013 18.4002 61.3398 17.9322H61.382V18.9122C61.3937 19.2391 61.3396 19.565 61.2229 19.8707C61.1061 20.1764 60.929 20.4558 60.7021 20.6923C60.4141 20.9459 60.0774 21.1388 59.7124 21.2591C59.3474 21.3794 58.9617 21.4247 58.5786 21.3923C57.9712 21.3991 57.3691 21.2784 56.8117 21.0381C56.257 20.7914 55.7395 20.4691 55.2739 20.0805L53.5379 22.66C54.2475 23.229 55.0769 23.6312 55.9644 23.8367C56.8426 24.0377 57.7408 24.1389 58.6419 24.1384C60.6219 24.1384 62.0964 23.6421 63.0653 22.6495C64.0342 21.6569 64.5189 20.2028 64.5193 18.2871V9.02121H61.6365L61.633 10.354ZM61.4446 14.9663C61.3208 15.2626 61.1394 15.5317 60.9109 15.758C60.6782 15.9888 60.4055 16.1757 60.1058 16.3096C59.7947 16.4472 59.458 16.5182 59.1176 16.5182C58.7771 16.5182 58.4405 16.4472 58.1293 16.3096C57.8337 16.1738 57.5645 15.9871 57.3341 15.758C57.1046 15.5298 56.9225 15.2587 56.7983 14.9603C56.674 14.662 56.6101 14.3422 56.6101 14.0192C56.6101 13.6962 56.674 13.3764 56.7983 13.0781C56.9225 12.7797 57.1046 12.5087 57.3341 12.2804C57.5646 12.0513 57.8338 11.8644 58.1293 11.7281C58.4406 11.591 58.7772 11.5202 59.1176 11.5202C59.4579 11.5202 59.7945 11.591 60.1058 11.7281C60.4053 11.8625 60.6781 12.0496 60.9109 12.2804C61.256 12.6258 61.4909 13.0651 61.5858 13.543C61.6808 14.0209 61.6316 14.5161 61.4446 14.9663Z" fill="#11142D"/>
<path id="Vector_7" d="M76.306 10.2189C75.7837 9.74624 75.1724 9.38149 74.5074 9.14581C73.079 8.64646 71.5223 8.64646 70.0939 9.14581C69.4287 9.38132 68.817 9.74609 68.2946 10.2189C67.7822 10.6892 67.3729 11.2597 67.0923 11.8947C66.8022 12.5875 66.6528 13.3306 66.6528 14.0812C66.6528 14.8317 66.8022 15.5748 67.0923 16.2676C67.3719 16.9045 67.7813 17.4765 68.2946 17.9476C68.8165 18.4209 69.4283 18.7855 70.0939 19.02C71.5222 19.5203 73.0791 19.5203 74.5074 19.02C75.1727 18.7854 75.7842 18.4208 76.306 17.9476C76.8193 17.4765 77.2288 16.9045 77.5084 16.2676C77.7984 15.5748 77.9478 14.8317 77.9478 14.0812C77.9478 13.3306 77.7984 12.5875 77.5084 11.8947C77.2277 11.2597 76.8184 10.6892 76.306 10.2189ZM74.1516 15.9351C73.6436 16.3907 72.9841 16.6428 72.3003 16.6428C71.6165 16.6428 70.957 16.3907 70.449 15.9351C70.022 15.4103 69.789 14.7555 69.789 14.0801C69.789 13.4047 70.022 12.7499 70.449 12.2251C70.957 11.7695 71.6165 11.5174 72.3003 11.5174C72.9841 11.5174 73.6436 11.7695 74.1516 12.2251C74.5786 12.7499 74.8116 13.4047 74.8116 14.0801C74.8116 14.7555 74.5786 15.4103 74.1516 15.9351Z" fill="#11142D"/>
<path id="Vector_8" d="M82.1096 9.0912H80.427V19.1411H82.1096V9.0912Z" fill="#11142D"/>
<path id="Vector_9" d="M81.2687 3.9378C81.1055 3.93472 80.9435 3.96556 80.793 4.02836C80.6425 4.09116 80.5069 4.18453 80.3947 4.3025C80.2236 4.47422 80.1074 4.69251 80.0608 4.92986C80.0141 5.16721 80.039 5.413 80.1325 5.63626C80.2259 5.85951 80.3836 6.05024 80.5857 6.1844C80.7879 6.31856 81.0254 6.39015 81.2683 6.39015C81.5112 6.39015 81.7487 6.31856 81.9509 6.1844C82.153 6.05024 82.3107 5.85951 82.4042 5.63626C82.4976 5.413 82.5225 5.16721 82.4759 4.92986C82.4292 4.69251 82.313 4.47422 82.1419 4.3025C82.03 4.18448 81.8944 4.09107 81.744 4.02826C81.5936 3.96545 81.4317 3.93464 81.2687 3.9378Z" fill="#11142D"/>
<path id="Vector_10" d="M94.5556 10.34C94.0823 9.85891 93.5129 9.48191 92.8843 9.23331C92.1943 8.96255 91.4581 8.82776 90.7165 8.8364C90.018 8.82842 89.3272 8.98303 88.6993 9.28791C88.0808 9.59409 87.5334 10.0254 87.0919 10.5542H87.0469V9.09121H85.3665V24.0376H87.0469V17.3596H87.0898C87.447 17.9721 87.9676 18.4741 88.5938 18.81C89.3208 19.2153 90.1437 19.4193 90.9767 19.4008C91.6587 19.4051 92.3343 19.2698 92.9616 19.0032C93.5673 18.7474 94.114 18.3711 94.5682 17.8972C95.0295 17.4129 95.3922 16.8443 95.6363 16.2228C96.1538 14.8668 96.1538 13.369 95.6363 12.013C95.39 11.39 95.0228 10.8215 94.5556 10.34ZM93.9622 15.59C93.8053 16.0276 93.56 16.4285 93.2413 16.7679C92.9226 17.1073 92.5374 17.378 92.1094 17.5633C91.1632 17.9491 90.1025 17.9491 89.1563 17.5633C88.7277 17.378 88.342 17.1071 88.0229 16.7673C87.7038 16.4275 87.4583 16.0261 87.3015 15.5879C86.9712 14.6355 86.9712 13.6003 87.3015 12.6479C87.4583 12.2097 87.7038 11.8083 88.0229 11.4685C88.342 11.1287 88.7277 10.8578 89.1563 10.6725C90.1025 10.2867 91.1632 10.2867 92.1094 10.6725C92.538 10.8578 92.9238 11.1287 93.2428 11.4685C93.5619 11.8083 93.8074 12.2097 93.9643 12.6479C94.2945 13.6003 94.2945 14.6355 93.9643 15.5879L93.9622 15.59Z" fill="#11142D"/>
<path id="Vector_11" d="M104.5 14.12C104.18 13.882 103.824 13.6971 103.445 13.5726C103.029 13.4328 102.604 13.3215 102.173 13.2394C101.849 13.1844 101.529 13.1129 101.213 13.0252C100.931 12.949 100.657 12.8483 100.393 12.7242C100.182 12.6288 99.9906 12.4938 99.8304 12.3266C99.6941 12.1771 99.6209 11.9811 99.6258 11.7792C99.6225 11.5614 99.6865 11.3478 99.8093 11.1674C99.9302 10.9892 100.088 10.8391 100.273 10.7271C100.47 10.6083 100.685 10.5214 100.91 10.4695C101.14 10.4128 101.376 10.3839 101.613 10.3834C102.064 10.3694 102.509 10.4851 102.896 10.7166C103.245 10.9353 103.537 11.2332 103.748 11.586L105.15 10.6627C104.84 10.0524 104.335 9.56148 103.715 9.2662C103.091 8.97736 102.409 8.83077 101.72 8.8371C101.253 8.83599 100.789 8.90104 100.34 9.0303C99.9101 9.15238 99.5022 9.34138 99.1315 9.5903C98.777 9.82857 98.4819 10.1444 98.2688 10.5136C98.0481 10.9068 97.9365 11.3513 97.9453 11.8016C97.9277 12.2424 98.0282 12.6799 98.2364 13.0693C98.4264 13.395 98.6915 13.6709 99.0099 13.8743C99.3613 14.095 99.7425 14.2649 100.142 14.379C100.574 14.5078 101.027 14.6224 101.501 14.7227C101.775 14.7801 102.041 14.8445 102.299 14.9159C102.541 14.9806 102.774 15.0781 102.99 15.2057C103.18 15.318 103.345 15.4678 103.475 15.646C103.604 15.8433 103.668 16.0762 103.658 16.3117C103.666 16.5592 103.598 16.8032 103.464 17.0117C103.33 17.2093 103.153 17.3744 102.947 17.4947C102.723 17.6274 102.479 17.7221 102.224 17.7747C101.965 17.8313 101.701 17.8601 101.436 17.8608C100.912 17.881 100.393 17.7544 99.9373 17.4954C99.5183 17.2299 99.1496 16.893 98.8481 16.5L97.5122 17.5311C97.9258 18.1705 98.5128 18.6802 99.2053 19.0011C99.9151 19.2816 100.674 19.4168 101.438 19.3987C101.935 19.3991 102.431 19.3416 102.914 19.2272C103.375 19.1213 103.813 18.936 104.209 18.6798C104.587 18.4298 104.9 18.0939 105.123 17.6998C105.364 17.2525 105.484 16.75 105.469 16.2424C105.482 15.806 105.394 15.3725 105.21 14.9761C105.043 14.64 104.8 14.347 104.5 14.12Z" fill="#11142D"/>
<path id="Vector_12" d="M116.622 16.7576V9.0912H114.939V13.9912C114.945 14.5195 114.883 15.0463 114.756 15.5592C114.648 15.9989 114.457 16.4141 114.193 16.7828C113.943 17.1256 113.609 17.399 113.222 17.5773C112.778 17.7737 112.296 17.8694 111.81 17.8573C111.481 17.8838 111.151 17.8312 110.847 17.7042C110.543 17.5771 110.274 17.3793 110.062 17.1272C109.658 16.5417 109.46 15.8394 109.5 15.1301V9.0912H107.817V15.2974C107.812 15.86 107.888 16.4204 108.044 16.9613C108.179 17.4409 108.419 17.8847 108.747 18.2612C109.075 18.6292 109.484 18.9167 109.942 19.1012C110.488 19.3134 111.071 19.4157 111.657 19.4022C112.051 19.4054 112.444 19.3509 112.822 19.2405C113.164 19.1415 113.49 18.9972 113.793 18.8114C114.068 18.6426 114.318 18.4368 114.536 18.1996C114.733 17.9886 114.897 17.7496 115.022 17.4905H115.065C115.065 17.7775 115.072 18.0575 115.087 18.3305C115.102 18.6035 115.109 18.8756 115.108 19.1467H116.705C116.705 18.8168 116.69 18.4516 116.661 18.0512C116.632 17.6508 116.619 17.2196 116.622 16.7576Z" fill="#11142D"/>
<path id="Vector_13" d="M134.806 11.2927C134.694 10.8064 134.472 10.3517 134.158 9.9627C133.842 9.5863 133.433 9.29708 132.972 9.1227C132.392 8.91414 131.777 8.81584 131.16 8.8329C130.49 8.80378 129.828 8.97994 129.262 9.3376C128.737 9.71229 128.297 10.1914 127.968 10.7446C127.882 10.5724 127.77 10.3755 127.633 10.1538C127.481 9.91445 127.287 9.70359 127.062 9.5308C126.785 9.32105 126.476 9.15572 126.148 9.0408C125.706 8.89313 125.243 8.82394 124.777 8.8364C124.383 8.83317 123.991 8.88766 123.613 8.9981C123.271 9.09711 122.945 9.24144 122.642 9.4272C122.367 9.59617 122.117 9.80204 121.898 10.039C121.702 10.25 121.538 10.489 121.413 10.7481H121.369C121.369 10.4611 121.362 10.1825 121.348 9.9081C121.334 9.6337 121.326 9.3642 121.326 9.0919H119.73C119.73 9.42184 119.745 9.787 119.773 10.1874C119.802 10.5878 119.816 11.0174 119.816 11.4761V19.1418H121.5V14.246C121.495 13.7175 121.556 13.1904 121.684 12.6773C121.791 12.2375 121.982 11.8221 122.246 11.4537C122.496 11.1108 122.83 10.8373 123.216 10.6592C123.661 10.4627 124.143 10.367 124.63 10.3792C124.918 10.3547 125.207 10.4066 125.468 10.5295C125.73 10.6525 125.954 10.8421 126.117 11.0792C126.479 11.8157 126.635 12.6351 126.571 13.4522V19.1432H128.25V13.343C128.245 12.9297 128.315 12.5188 128.455 12.1299C128.58 11.7851 128.771 11.4679 129.018 11.1961C129.251 10.9416 129.533 10.737 129.848 10.5948C130.167 10.4513 130.513 10.378 130.862 10.3799C131.278 10.3649 131.691 10.4456 132.07 10.6158C132.369 10.7595 132.628 10.9736 132.825 11.2395C133.014 11.5027 133.147 11.8024 133.213 12.1194C133.285 12.4511 133.321 12.7895 133.321 13.1288V19.1418H135V13.0427C135.006 12.4537 134.941 11.8661 134.806 11.2927Z" fill="#11142D"/>
</g>
</svg>
          </div>
            <ul className="navbar-items">
                <li><a href="/">Home</a></li>
                <li><a href="/room-suites">Room &amp; Suites</a></li>
                <li><a href="/restaurant-bar">Restaurant &amp; Bar</a></li>
                <li><a href="/blog">Blog</a></li>
                <li>urfhefier</li>
            </ul>
     
            <div className="navbar-actions">
            <FaSearch className="search-icon" />
            <button className="booking-button">Book Room</button>
            
            </div>
        </nav>
         <Hero></Hero>
         </>
    );
}

export default NavBar;