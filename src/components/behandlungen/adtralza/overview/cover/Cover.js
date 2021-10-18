import React from 'react';
import './Cover.css';

const Cover = () => {
    return (
        <div>
            <div className='cover-container'>
                <img className='adtralza-cover' src='/images/cover.png' alt='cover'/>
            </div>
            <div className='container-cover'>
                <div className='cover-text-container'>
                    <svg width="123" height="87" viewBox="0 0 123 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M62.4197 31.5407C56.8002 31.1949 55.417 30.7626 57.1461 30.9355C61.7824 31.2655 66.4383 31.2076 71.065 30.7626C78.8005 30.0298 86.3487 27.9526 93.3699 24.6244C98.9952 21.8156 104.275 18.3632 109.104 14.3365C112.649 11.3971 115.588 9.23578 117.317 9.23578C117.404 9.23578 117.577 9.32222 117.663 9.32222C119.047 9.58158 118.441 12.4345 113.946 16.3249C109.537 20.1289 101.497 25.0567 90.1712 28.3419C82.5141 30.5401 74.5876 31.6587 66.6213 31.6652C65.0046 31.6652 63.5885 31.615 62.4197 31.5407Z"
                            fill="url(#paint0_linear_1:552)"/>
                        <path
                            d="M100.026 15.3738C96.0492 20.0423 92.0723 23.1546 92.3317 23.6733C92.5046 24.192 98.6428 21.7714 104.435 16.4113C110.314 11.0512 111.438 5.25881 109.363 5.51817C107.202 5.60462 104.089 10.7918 100.026 15.3738Z"
                            fill="#DA9BC5"/>
                        <path
                            d="M89.5657 11.3107C89.3863 11.7882 89.0973 12.217 88.7219 12.5624C88.3464 12.9077 87.8951 13.1601 87.4043 13.2991C86.6262 13.472 86.3669 12.8668 86.6263 12.0888C86.7957 11.6478 87.0511 11.2449 87.3776 10.9036C87.7041 10.5622 88.0952 10.2892 88.5282 10.1003C89.3928 9.75453 89.9115 10.2733 89.5657 11.3107Z"
                            fill="#97CAEB"/>
                        <path
                            d="M74.523 29.5529C74.6959 29.4665 74.9553 29.4665 75.1282 29.38C79.5373 27.9968 83.5141 25.3167 87.1451 22.5502C89.5658 20.6483 91.8137 18.8327 93.7156 17.363C95.6176 15.8069 97.3466 14.683 98.2976 14.683C98.3841 14.683 98.3841 14.683 98.3841 14.7694C100.286 14.7694 97.606 20.1295 89.9981 24.4522C85.2092 27.1164 79.9666 28.8669 74.5377 29.6143C74.4132 29.6135 74.4028 29.5927 74.523 29.5529Z"
                            fill="url(#paint1_linear_1:552)"/>
                        <path
                            d="M89.3052 13.472C87.8355 15.9792 87.0574 18.1405 88.0948 18.3999C89.1323 18.6592 93.0227 16.4979 95.7892 12.7804C96.3666 12.1552 96.8102 11.4186 97.0926 10.6158C97.3751 9.81303 97.4905 8.96096 97.4318 8.11194C97.2589 7.07451 96.4808 6.64224 95.3569 7.16096C93.282 8.11195 90.9478 10.9649 89.3052 13.472Z"
                            fill="#C017A2"/>
                        <path
                            d="M100.631 8.28477C99.5934 11.8294 98.6425 14.25 100.285 14.1636C101.755 14.0771 106.077 10.9648 107.72 6.46926C108.124 5.66144 108.327 4.7681 108.312 3.86508C108.297 2.96205 108.064 2.07598 107.634 1.28207C107.35 0.761101 106.887 0.360362 106.331 0.1538C105.775 -0.0527629 105.163 -0.0512077 104.608 0.158176C102.446 1.19561 101.755 4.74019 100.631 8.28477Z"
                            fill="#CAE6F5"/>
                        <path
                            d="M112.129 5.43176C110.746 8.37116 109.795 10.9648 110.659 11.1377C111.524 11.3106 114.377 9.14924 116.452 6.38274C118.613 3.61624 118.613 1.19555 116.97 0.763286C115.414 0.417473 113.599 2.49235 112.129 5.43176Z"
                            fill="#97CAEB"/>
                        <path
                            d="M107.719 6.4691C107.806 6.38265 107.806 6.20974 107.892 6.12329C106.25 7.42009 104.002 10.6189 101.408 13.8176C104.257 12.1216 106.473 9.54111 107.719 6.4691Z"
                            fill="#97CAEB"/>
                        <path
                            d="M60.5927 31.9729C59.2639 31.8501 57.8504 31.6781 56.2796 31.4542H56.1931C53.3854 31.1408 50.6091 30.5913 47.8936 29.8116C47.0291 29.5522 46.3374 29.2929 45.7323 29.12C44.349 28.6012 43.3116 28.2554 42.7929 27.9961C42.4851 27.8325 42.1675 27.6881 41.8419 27.5638C39.9794 26.7432 38.0748 26.0217 36.136 25.4025C35.5308 25.2296 34.8392 25.0567 34.1476 24.8838C33.5424 24.7973 32.9372 24.6244 32.2456 24.5379C29.4959 24.1059 26.6957 24.1059 23.9461 24.5379C23.3922 24.6207 22.8437 24.7362 22.3035 24.8838C22.0366 24.8998 21.7739 24.9581 21.5254 25.0567C18.1908 26.0317 15.0162 27.4879 12.102 29.3793C9.68132 30.9355 7.86581 31.8865 7.08773 31.3677C6.30966 30.9355 7.00126 29.0335 9.76776 27.1315C13.8535 24.4511 18.6274 23.0099 23.5138 22.9818C24.8111 22.9239 26.1108 22.9527 27.4042 23.0682C30.4736 23.2918 33.4983 23.9316 36.3953 24.9702C37.93 25.5152 39.4311 26.1503 40.8909 26.8722C45.7161 28.8134 50.7725 30.1211 55.9338 30.7626C56.7983 30.849 57.4035 30.9355 57.8357 31.0219C59.219 31.1084 60.6887 31.1948 62.1584 31.1948C65.7937 31.1815 69.4169 30.7757 72.965 29.9845C76.663 29.0543 80.3008 27.8994 83.8581 26.5264C86.8876 25.4442 89.8347 24.144 92.6763 22.636C93.368 22.2037 94.1461 21.7714 94.9241 21.3392C95.7022 20.9069 96.3938 20.3882 97.1719 20.0424C97.7566 19.7612 98.3639 19.5299 98.9874 19.3507C98.9874 19.3507 99.1603 19.2643 99.5926 19.6966H99.852C99.9141 19.7154 99.9725 19.7447 100.025 19.783V20.5611C99.5061 21.8579 95.4429 24.7108 93.2815 25.8347L91.2067 26.8722C88.0697 28.3601 84.7986 29.5469 81.4374 30.4168C79.5355 30.849 77.5471 31.1948 75.6451 31.4542H75.5586C74.1754 31.6271 72.7921 31.8 71.5818 31.8865C71.2521 31.9176 70.9282 31.9464 70.6101 31.9729H60.5927Z"
                            fill="url(#paint2_linear_1:552)"/>
                        <path
                            d="M15.6484 54.1049H4.49598C3.97726 55.834 3.45854 57.9953 2.85337 60.7618H0.432678C1.40859 56.538 2.65022 52.38 4.15017 48.3126C5.46907 44.7107 7.05858 41.2138 8.90509 37.8517H11.3258C13.1598 41.178 14.7211 44.6475 15.9942 48.2261C17.4548 52.3065 18.6957 56.4622 19.7117 60.6754H17.291C16.6859 58.0818 16.1672 55.834 15.6484 54.1049ZM15.0433 52.203C13.7624 48.073 12.0831 44.0774 10.029 40.2724C8.01091 44.0945 6.33302 48.0868 5.0147 52.203H15.0433Z"
                            fill="white"/>
                        <path
                            d="M35.7054 58.6872C35.7625 59.302 35.8783 59.91 36.0512 60.5027C35.5991 60.7533 35.0972 60.9009 34.5815 60.935C33.9763 60.935 33.6305 60.1569 33.4576 58.6872C32.8296 59.4859 32.0324 60.1354 31.1233 60.5892C30.1281 60.9577 29.0719 61.1337 28.011 61.1079C26.9456 61.1429 25.8862 60.9354 24.9127 60.5011C23.9393 60.0668 23.0772 59.417 22.3916 58.6008C21.0083 56.9582 20.4031 54.7104 20.4031 51.8574C20.4031 48.918 21.0948 46.5838 22.5645 44.9412C23.3266 44.1037 24.2641 43.4448 25.3102 43.0114C26.3563 42.578 27.4851 42.3809 28.6162 42.434C29.4958 42.4649 30.3677 42.6102 31.2098 42.8663C32.0148 43.1172 32.7739 43.4967 33.4576 43.9902V34.9126H35.7054V56.5259C35.5755 57.2405 35.5755 57.9726 35.7054 58.6872ZM31.0369 58.6008C31.9928 58.1 32.7984 57.3541 33.3711 56.4394V46.1515C32.7623 45.5357 32.024 45.0632 31.2098 44.7683C30.3565 44.4301 29.4476 44.2542 28.5297 44.2495C27.6903 44.2117 26.8538 44.372 26.0878 44.7174C25.3218 45.0628 24.6479 45.5837 24.1206 46.238C22.9838 47.8824 22.4354 49.8625 22.5645 51.8574C22.5645 54.2781 22.9967 56.0936 23.9477 57.3904C24.4152 58.0184 25.031 58.5208 25.7401 58.8527C26.4491 59.1846 27.2293 59.3356 28.011 59.2924C29.0606 59.309 30.0987 59.0717 31.0369 58.6008Z"
                            fill="white"/>
                        <path
                            d="M48.846 59.0328C48.9431 59.2211 49.0019 59.4268 49.0189 59.6379C49.0338 59.8182 48.9917 59.9986 48.8986 60.1537C48.8056 60.3087 48.6662 60.4307 48.5002 60.5025C47.6568 60.8732 46.741 61.0505 45.8202 61.0212C44.5942 61.0893 43.3884 60.6874 42.4485 59.8973C42.0178 59.505 41.6785 59.0229 41.4544 58.4852C41.2304 57.9474 41.127 57.367 41.1517 56.785V44.5086H37.78V42.7796H41.1517V37.8517H43.3995V42.7796H48.068V44.5086H43.3995V56.3527C43.3995 58.1682 44.1776 59.1192 45.7337 59.1192C46.6811 59.1309 47.6214 58.9546 48.5002 58.6005C48.6361 58.7268 48.7527 58.8725 48.846 59.0328Z"
                            fill="white"/>
                        <path
                            d="M60.5181 42.9524C60.7167 43.0613 60.8795 43.2254 60.9869 43.4248C61.0943 43.6243 61.1417 43.8505 61.1233 44.0763C61.1323 44.2499 61.1064 44.4235 61.047 44.5869C60.9875 44.7503 60.8959 44.9 60.7775 45.0273C60.1007 44.7162 59.3605 44.5682 58.6161 44.595C57.9318 44.5892 57.2555 44.7424 56.6404 45.0424C56.0253 45.3424 55.4883 45.7812 55.0716 46.3241C54.1457 47.6665 53.6898 49.2775 53.7748 50.9061V60.7617H51.527V42.7795H53.7748V45.9782C54.2744 44.9751 55.0175 44.1131 55.9361 43.4711C56.7574 42.8505 57.7596 42.5165 58.7891 42.5201C59.3881 42.5501 59.9755 42.6969 60.5181 42.9524Z"
                            fill="white"/>
                        <path
                            d="M75.8204 58.6868C75.9678 59.2721 76.2659 59.8086 76.6849 60.243C76.25 60.6811 75.6596 60.9297 75.0423 60.9346C74.61 60.9346 74.2642 60.6752 73.9184 60.1565C73.591 59.5079 73.3859 58.8045 73.3132 58.0816C72.6263 59.026 71.7017 59.7718 70.6332 60.243C69.5219 60.7558 68.3125 61.0212 67.0886 61.021C65.6497 61.0844 64.2367 60.6236 63.1117 59.7242C62.6217 59.315 62.2338 58.7972 61.9787 58.212C61.7236 57.6267 61.6083 56.9901 61.642 56.3526C61.642 54.2777 62.6795 52.7215 64.6679 51.5112C66.6563 50.3873 69.5957 49.6957 73.3997 49.5228V48.4853C73.4574 47.9024 73.3866 47.314 73.1925 46.7613C72.9983 46.2087 72.6854 45.7053 72.2758 45.2866C71.3596 44.5224 70.1794 44.1497 68.9906 44.2491C68.0616 44.233 67.1424 44.4406 66.3105 44.8543C65.3419 45.369 64.4654 46.0409 63.7169 46.8427C63.5653 46.9512 63.3846 47.0115 63.1982 47.0156C62.9454 47.0076 62.7023 46.9164 62.5066 46.7563C62.2055 46.5423 61.9425 46.2793 61.7285 45.9782C62.6459 44.8521 63.7961 43.9379 65.1002 43.2981C66.335 42.6796 67.6959 42.3541 69.077 42.3472C69.939 42.2913 70.8034 42.4078 71.6198 42.6898C72.4362 42.9719 73.1883 43.4138 73.8319 43.9898C74.4122 44.581 74.8651 45.2851 75.1625 46.0583C75.4599 46.8316 75.5955 47.6576 75.561 48.4853V56.1797C75.5325 57.0233 75.6197 57.8669 75.8204 58.6868ZM70.6332 58.2545C71.7329 57.5575 72.6514 56.6093 73.3132 55.488V51.4247C67.0021 51.6841 63.8898 53.3267 63.8898 56.3526C63.8898 58.2545 65.0137 59.2055 67.2615 59.2055C68.4608 59.2807 69.6499 58.9453 70.6332 58.2545Z"
                            fill="white"/>
                        <path d="M81.6979 34.9126H79.4501V60.7621H81.6979V34.9126Z" fill="white"/>
                        <path
                            d="M98.9027 58.8599V60.7619H84.465V59.2057L95.6175 44.6816H85.3296V42.7796H98.6433V44.3358L87.4909 58.8599H98.9027Z"
                            fill="white"/>
                        <path
                            d="M114.637 58.6868C114.785 59.2721 115.083 59.8086 115.502 60.243C115.067 60.6811 114.476 60.9297 113.859 60.9346C113.427 60.9346 113.081 60.6752 112.735 60.1565C112.408 59.5079 112.203 58.8045 112.13 58.0816C111.443 59.026 110.518 59.7718 109.45 60.243C108.339 60.7558 107.129 61.0212 105.905 61.021C104.466 61.0844 103.053 60.6236 101.929 59.7242C101.438 59.315 101.051 58.7972 100.795 58.212C100.54 57.6267 100.425 56.9901 100.459 56.3526C100.459 54.2777 101.496 52.7215 103.485 51.5112C105.473 50.3873 108.412 49.6957 112.216 49.5228V48.4853C112.274 47.9024 112.203 47.314 112.009 46.7613C111.815 46.2087 111.502 45.7053 111.093 45.2866C110.176 44.5224 108.996 44.1497 107.807 44.2491C106.878 44.233 105.959 44.4406 105.127 44.8543C104.159 45.369 103.282 46.0409 102.534 46.8427C102.382 46.9512 102.201 47.0115 102.015 47.0156C101.762 47.0076 101.519 46.9164 101.323 46.7563C101.022 46.5423 100.759 46.2793 100.545 45.9782C101.463 44.8521 102.613 43.9379 103.917 43.2981C105.152 42.6796 106.513 42.3541 107.894 42.3472C108.756 42.2913 109.62 42.4078 110.437 42.6898C111.253 42.9719 112.005 43.4138 112.649 43.9898C113.229 44.581 113.682 45.2851 113.979 46.0583C114.277 46.8316 114.412 47.6576 114.378 48.4853V56.1797C114.349 57.0233 114.436 57.8669 114.637 58.6868ZM109.45 58.2545C110.55 57.5575 111.468 56.6093 112.13 55.488V51.4247C105.819 51.6841 102.707 53.3267 102.707 56.3526C102.707 58.2545 103.83 59.2055 106.078 59.2055C107.278 59.2807 108.467 58.9453 109.45 58.2545Z"
                            fill="white"/>
                        <path
                            d="M3.80408 68.1228C2.29937 71.031 1.55581 74.2729 1.64275 77.5462C1.61758 80.813 2.35779 84.0403 3.80408 86.9696H2.85309C0.995102 84.1778 0.00263526 80.8997 0.000136769 77.5462C-0.0134152 74.1903 0.980436 70.9076 2.85309 68.1228H3.80408Z"
                            fill="white"/>
                        <path
                            d="M5.44617 68.5547H7.08879V71.8399H8.9043V73.2232H7.08879V80.3988C7.08879 81.2633 7.26169 81.6091 8.12622 81.6091C8.36036 81.6355 8.59742 81.6059 8.81785 81.5227V82.9924C8.3925 83.087 7.9552 83.1162 7.52105 83.0788C5.79199 83.0788 5.44617 82.3007 5.44617 80.831V73.1367H3.89001V71.7535H5.44617V68.5547Z"
                            fill="white"/>
                        <path
                            d="M9.94259 71.8396H11.5852V73.4822C12.0175 72.4448 12.7091 71.4938 13.833 71.4938C14.1788 71.4938 14.4382 71.4938 14.5246 71.5802V73.3093C14.2386 73.2617 13.9498 73.2329 13.6601 73.2228C13.0207 73.2977 12.4361 73.6203 12.032 74.1214C11.6279 74.6225 11.4364 75.2622 11.4988 75.9029V82.992H9.85614V71.8396H9.94259Z"
                            fill="white"/>
                        <path
                            d="M15.4757 75.2113C15.4757 72.6177 16.5131 71.4938 18.9338 71.4938C22.1326 71.4938 22.1326 73.5687 22.1326 74.6926V80.9172C22.1326 81.3494 22.1326 81.7817 22.6513 81.7817C22.8242 81.7817 22.9971 81.7817 22.9971 81.6953V82.992C22.6819 83.0377 22.3644 83.0665 22.0461 83.0785C21.4409 83.0785 20.6629 83.0785 20.5764 81.6088C20.3467 82.0842 19.9921 82.4881 19.5504 82.7775C19.1088 83.0668 18.5968 83.2306 18.0693 83.2514C16.1673 83.2514 15.2163 81.9546 15.2163 79.9662C15.2163 78.41 15.8215 77.2861 17.2047 76.8539L19.3661 76.1623C20.5764 75.73 20.5764 75.3842 20.5764 74.4332C20.5985 74.212 20.5712 73.9887 20.4965 73.7794C20.4217 73.57 20.3014 73.3799 20.1443 73.2227C19.9871 73.0655 19.797 72.9452 19.5876 72.8705C19.3783 72.7958 19.155 72.7685 18.9338 72.7906C17.1183 72.7906 17.1183 74.6061 17.1183 74.9519V75.0384H15.4757V75.2113ZM20.49 76.9403C19.8848 77.632 18.4151 77.8049 17.7235 78.2371C17.2047 78.5829 16.9454 79.0152 16.9454 80.0526C16.9454 81.1765 17.2912 81.9546 18.4151 81.9546C18.9715 81.9275 19.4965 81.6884 19.8823 81.2865C20.2681 80.8847 20.4855 80.3504 20.49 79.7933V76.9403Z"
                            fill="white"/>
                        <path d="M26.1084 68.1222H24.4658V83.0786H26.1084V68.1222Z" fill="white"/>
                        <path
                            d="M31.5554 71.4938C34.5812 71.4938 35.2729 74.2603 35.2729 77.3726C35.2729 80.4849 34.4948 83.2514 31.5554 83.2514C28.5295 83.2514 27.8379 80.4849 27.8379 77.3726C27.8379 74.2603 28.616 71.4938 31.5554 71.4938ZM33.6303 77.4591C33.6303 75.0384 33.2844 72.9635 31.5554 72.9635C29.9128 72.9635 29.567 75.0384 29.567 77.4591C29.567 79.8797 29.9128 81.9546 31.5554 81.9546C33.2844 81.9546 33.6303 79.8797 33.6303 77.4591Z"
                            fill="white"/>
                        <path
                            d="M44.7821 82.992H42.8802L39.9408 77.459L38.644 79.2745V82.992H37.0013V68.1221H38.644V77.0267L42.275 71.8396H44.177L41.0646 76.0758L44.7821 82.992Z"
                            fill="white"/>
                        <path
                            d="M45.7341 68.1221H47.3767V70.1105H45.7341V68.1221ZM45.7341 71.8396H47.3767V83.0785H45.7341V71.8396Z"
                            fill="white"/>
                        <path
                            d="M49.538 71.8396H51.0942V73.1364C51.3148 72.6541 51.6672 72.244 52.1108 71.9534C52.5544 71.6627 53.0711 71.5034 53.6014 71.4938C56.3679 71.4938 56.3679 73.7416 56.3679 75.0384V82.992H54.7252V75.2977C54.7252 74.4332 54.6388 73.0499 53.1691 73.0499C52.8818 73.0501 52.5976 73.1097 52.3344 73.225C52.0713 73.3403 51.8348 73.5089 51.64 73.72C51.4451 73.9311 51.296 74.1802 51.2021 74.4518C51.1081 74.7233 51.0714 75.0113 51.0942 75.2977V82.992H49.4516V71.8396H49.538Z"
                            fill="white"/>
                        <path
                            d="M65.4451 82.9921H63.8889V81.6953C63.6684 82.1775 63.3159 82.5876 62.8724 82.8783C62.4288 83.1689 61.912 83.3282 61.3818 83.3379C58.6153 83.3379 58.6153 81.0901 58.6153 79.7933V71.8396H60.2579V79.5339C60.2579 80.3985 60.3444 81.7817 61.8141 81.7817C62.1014 81.7815 62.3855 81.7219 62.6487 81.6066C62.9119 81.4913 63.1483 81.3228 63.3432 81.1117C63.5381 80.9006 63.6872 80.6514 63.7811 80.3799C63.875 80.1084 63.9117 79.8203 63.8889 79.5339V71.8396H65.5315V82.9921H65.4451Z"
                            fill="white"/>
                        <path
                            d="M67.6927 71.8397H69.2488V73.1365C69.4694 72.6542 69.8218 72.2441 70.2654 71.9535C70.709 71.6628 71.2258 71.5035 71.756 71.4939C72.2927 71.447 72.8268 71.6099 73.2459 71.9484C73.6651 72.287 73.9367 72.7748 74.0038 73.3094C74.2114 72.8035 74.5561 72.3656 74.999 72.0449C75.4419 71.7242 75.9655 71.5333 76.5109 71.4939C79.2774 71.4939 79.2774 73.7417 79.2774 75.0385V82.9921H77.7213V75.2978C77.7213 74.4333 77.6348 73.05 76.338 73.05C75.5599 73.05 74.436 73.5688 74.436 75.2978V82.9921H72.7934V75.2978C72.7934 74.4333 72.707 73.05 71.4102 73.05C70.6321 73.05 69.5082 73.5688 69.5082 75.2978V82.9921H67.8656V71.8397H67.6927Z"
                            fill="white"/>
                        <path
                            d="M81.3526 75.2113C81.3526 72.6177 82.39 71.4938 84.8107 71.4938C88.0095 71.4938 88.0095 73.5687 88.0095 74.6926V80.9172C88.0095 81.3494 88.0095 81.7817 88.5282 81.7817C88.678 81.8043 88.8309 81.7737 88.9605 81.6953V82.992C88.6452 83.0377 88.3278 83.0665 88.0095 83.0785C87.4043 83.0785 86.6262 83.0785 86.5398 81.6088C86.3101 82.0842 85.9554 82.4881 85.5138 82.7775C85.0722 83.0668 84.5602 83.2306 84.0326 83.2514C82.1307 83.2514 81.1797 81.9546 81.1797 79.9662C81.1797 78.41 81.7849 77.2861 83.1681 76.8539L85.3294 76.1623C86.5398 75.73 86.5398 75.3842 86.5398 74.4332C86.5619 74.212 86.5346 73.9887 86.4598 73.7794C86.3851 73.57 86.2648 73.3799 86.1076 73.2227C85.9505 73.0655 85.7603 72.9452 85.551 72.8705C85.3417 72.7958 85.1184 72.7685 84.8972 72.7906C83.0817 72.7906 83.0817 74.6061 83.0817 74.9519V75.0384H81.3526V75.2113ZM86.3669 76.9403C85.7617 77.632 84.292 77.8049 83.6004 78.2371C83.0817 78.5829 82.8223 79.0152 82.8223 80.0526C82.8223 81.1765 83.1681 81.9546 84.292 81.9546C84.8485 81.9275 85.3734 81.6884 85.7592 81.2865C86.145 80.8847 86.3625 80.3504 86.3669 79.7933V76.9403Z"
                            fill="white"/>
                        <path
                            d="M90.2571 68.1221H91.8997V73.1364C92.102 72.6651 92.4406 72.2652 92.8719 71.9879C93.3033 71.7106 93.8077 71.5686 94.3204 71.5802C97.1733 71.5802 97.5191 75.1248 97.5191 77.459C97.5191 80.6578 96.5682 83.3378 94.1475 83.3378C93.6479 83.3341 93.1622 83.1735 92.7588 82.8788C92.3555 82.5841 92.055 82.17 91.8997 81.6952V83.0785H90.3435V68.1221H90.2571ZM93.8881 81.7817C95.4443 81.7817 95.7901 79.9662 95.7901 77.3726C95.7901 74.6925 95.3578 72.9635 93.8881 72.9635C92.159 72.9635 91.8132 75.2112 91.8132 77.3726C91.8132 79.7068 92.159 81.7817 93.8881 81.7817Z"
                            fill="white"/>
                        <path
                            d="M97.606 86.8824C99.1107 83.9742 99.8542 80.7323 99.7673 77.459C99.7924 74.1923 99.0522 70.965 97.606 68.0356H98.5569C100.415 70.8274 101.407 74.1055 101.41 77.459C101.423 80.8149 100.43 84.0976 98.5569 86.8824H97.606Z"
                            fill="white"/>
                        <path
                            d="M120.776 38.2839C121.357 38.6061 121.837 39.0854 122.159 39.6672C122.499 40.2435 122.678 40.9002 122.678 41.5691C122.678 42.2381 122.499 42.8948 122.159 43.4711C121.837 44.0528 121.357 44.5321 120.776 44.8543C120.199 45.194 119.543 45.3731 118.874 45.3731C118.205 45.3731 117.548 45.194 116.972 44.8543C116.39 44.5321 115.911 44.0528 115.588 43.4711C115.249 42.8948 115.07 42.2381 115.07 41.5691C115.07 40.9002 115.249 40.2435 115.588 39.6672C115.911 39.0854 116.39 38.6061 116.972 38.2839C117.548 37.9443 118.205 37.7651 118.874 37.7651C119.543 37.7651 120.199 37.9443 120.776 38.2839ZM120.516 44.3356C121.015 44.0681 121.41 43.6423 121.64 43.1253C121.924 42.6242 122.072 42.0583 122.072 41.4827C122.072 40.907 121.924 40.3411 121.64 39.8401C121.36 39.3585 120.976 38.9451 120.516 38.6297C120.011 38.3558 119.448 38.2075 118.874 38.1974C118.325 38.1958 117.787 38.3454 117.318 38.6297C116.819 38.8973 116.424 39.3231 116.194 39.8401C115.91 40.3411 115.761 40.907 115.761 41.4827C115.761 42.0583 115.91 42.6242 116.194 43.1253C116.474 43.6069 116.858 44.0203 117.318 44.3356C117.796 44.5983 118.328 44.7463 118.874 44.7679C119.448 44.7578 120.011 44.6096 120.516 44.3356ZM120.343 41.6556C120.147 41.8485 119.911 41.996 119.652 42.0878L120.603 43.7305H119.998L119.133 42.1743H118.182V43.7305H117.49V39.5807H119.219C120.17 39.5807 120.689 40.013 120.689 40.8775C120.611 41.1517 120.494 41.4135 120.343 41.6556ZM119.825 41.3962C119.909 41.3201 119.976 41.2266 120.021 41.1221C120.066 41.0176 120.087 40.9047 120.084 40.791C120.084 40.2723 119.738 40.013 119.133 40.013H118.182V41.5691H119.133C119.377 41.6054 119.626 41.5432 119.825 41.3962Z"
                            fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_1:552" x1="116.403" y1="21.4093" x2="58.7603" y2="18.781"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#97CAEB"/>
                                <stop offset="0.0667423" stopColor="#97CAEB"/>
                                <stop offset="0.1774" stopColor="#7CB7DD"/>
                                <stop offset="0.4178" stopColor="#4791C1"/>
                                <stop offset="0.6263" stopColor="#2076AD"/>
                                <stop offset="0.7924" stopColor="#0966A0"/>
                                <stop offset="0.8953" stopColor="#00609C"/>
                                <stop offset="1" stopColor="#00609C"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1:552" x1="75.3385" y1="22.1568" x2="97.7991" y2="22.1568"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00609C"/>
                                <stop offset="0.3632" stopColor="#51419E"/>
                                <stop offset="0.6637" stopColor="#8D2AA0"/>
                                <stop offset="0.8837" stopColor="#B21CA1"/>
                                <stop offset="1" stopColor="#C017A2"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_1:552" x1="7.26039" y1="25.7189" x2="99.9658" y2="25.7189"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#97CAEB"/>
                                <stop offset="0.2666" stopColor="#97CAEB"/>
                                <stop offset="0.3397" stopColor="#7CB7DD"/>
                                <stop offset="0.4986" stopColor="#4791C1"/>
                                <stop offset="0.6363" stopColor="#2076AD"/>
                                <stop offset="0.7461" stopColor="#0966A0"/>
                                <stop offset="0.8141" stopColor="#00609C"/>
                                <stop offset="1" stopColor="#00609C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <h3>Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis
                        (eczema)
                        who are candidates for systemic therapy.</h3>
                </div>
            </div>
        </div>
    );
};

export default Cover;