import { THONLY } from "/global.mjs";
const template = document.createElement("template");

// Reference: https://codepen.io/lewismenelaws/pen/ypKjpd?editors=1010
// https://codepen.io/bezi/pen/LYeaeR?editors=0110

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-main/tl-kiitos/shadow.css">
	<svg version="1.1" id="laptop" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		<g>
			<path id="screen" fill="#38454FCC" d="M512,317.793H0V48.552c0-17.064,13.833-30.897,30.897-30.897h450.207
				c17.064,0,30.897,13.833,30.897,30.897V317.793z" />
			<path id="monitorBottom" fill="#E8EDEECC" d="M481.103,388.414H30.897C13.833,388.414,0,374.581,0,357.517v-39.724h512v39.724
				C512,374.581,498.167,388.414,481.103,388.414" />
			<!--
			<path id="stand" fill="#E8EDEECC" d="M361.931,494.345H150.069c0-19.5,15.81-35.31,35.31-35.31h141.241
				C346.121,459.034,361.931,474.845,361.931,494.345" />
			<polygon id="standBack" fill="#B0B6BBCC" points="317.793,459.034 194.207,459.034 211.862,388.414 300.138,388.414 	" />
			
			<g>
			<path id="path" style="fill:#EA6148;" d="M432.552,282.483H300.138c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828
					h132.414c4.882,0,8.828,3.955,8.828,8.828C441.379,278.528,437.433,282.483,432.552,282.483" />
			<path id="path" style="fill:#EA6148;" d="M167.724,229.517H79.448c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h88.276
					c4.882,0,8.828,3.955,8.828,8.828C176.552,225.562,172.606,229.517,167.724,229.517" />
			<path style="fill:#EA6148;" d="M388.414,229.517H256c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h132.414
					c4.882,0,8.828,3.955,8.828,8.828C397.241,225.562,393.295,229.517,388.414,229.517" />
			<path style="fill:#EA6148;" d="M211.862,229.517c-1.148,0-2.295-0.265-3.354-0.706c-1.148-0.441-2.03-1.059-2.913-1.854
					c-1.598-1.677-2.56-3.884-2.56-6.268s0.962-4.59,2.56-6.268c0.883-0.794,1.766-1.412,2.913-1.854
					c3.169-1.324,7.15-0.618,9.622,1.854c1.589,1.677,2.56,3.972,2.56,6.268c0,2.295-0.971,4.59-2.56,6.268
					C216.452,228.546,214.157,229.517,211.862,229.517" />
			<path style="fill:#EA6148;" d="M256,282.483H123.586c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828H256
					c4.882,0,8.828,3.955,8.828,8.828C264.828,278.528,260.882,282.483,256,282.483" />
			<path style="fill:#EA6148;" d="M79.448,282.483c-1.148,0-2.295-0.265-3.354-0.706c-1.059-0.441-2.03-1.059-2.913-1.854
					c-1.598-1.677-2.56-3.884-2.56-6.268c0-1.148,0.265-2.295,0.706-3.354c0.441-1.148,1.059-2.03,1.854-2.913
					c2.119-2.03,5.12-2.913,7.936-2.383c0.627,0.088,1.148,0.265,1.686,0.53c0.521,0.177,1.059,0.441,1.501,0.794
					c0.521,0.353,0.971,0.706,1.412,1.059c0.794,0.883,1.412,1.766,1.854,2.913c0.441,1.059,0.706,2.207,0.706,3.354
					c0,2.383-0.971,4.59-2.56,6.268c-0.441,0.353-0.892,0.706-1.412,1.059c-0.441,0.353-0.98,0.618-1.501,0.794
					c-0.538,0.265-1.059,0.441-1.686,0.53C80.596,282.394,79.978,282.483,79.448,282.483" />
			<path style="fill:#EA6148;" d="M432.552,229.517c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
					c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
					c0-2.295,0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
					c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
					c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677s-0.088,1.148-0.185,1.766
					c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
					c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
					C433.699,229.429,433.081,229.517,432.552,229.517" />
			<path style="fill:#EA6148;" d="M432.552,123.586H300.138c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
					c4.882,0,8.828,3.955,8.828,8.828S437.433,123.586,432.552,123.586" />
			<path style="fill:#EA6148;" d="M432.552,176.552h-88.276c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h88.276
					c4.882,0,8.828,3.955,8.828,8.828S437.433,176.552,432.552,176.552" />
			<path style="fill:#EA6148;" d="M273.655,176.552H256c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h17.655
					c4.882,0,8.828,3.955,8.828,8.828S278.537,176.552,273.655,176.552" />
			<path style="fill:#EA6148;" d="M388.414,70.621H256c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
					c4.882,0,8.828,3.955,8.828,8.828S393.295,70.621,388.414,70.621" />
			<path style="fill:#EA6148;" d="M432.552,70.621c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
					c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
					c0-2.295,0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
					c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
					c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677s-0.088,1.148-0.185,1.766
					c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
					c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
					C433.699,70.532,433.081,70.621,432.552,70.621" />
			<path style="fill:#EA6148;" d="M264.828,123.586c-2.295,0-4.599-0.971-6.268-2.56c-0.794-0.883-1.412-1.854-1.854-2.913
					S256,115.906,256,114.759c0-1.148,0.265-2.295,0.706-3.354s1.059-2.03,1.854-2.913c2.03-2.03,5.12-2.913,7.936-2.383
					c0.627,0.088,1.148,0.265,1.686,0.53c0.521,0.177,1.059,0.441,1.501,0.794c0.521,0.353,0.971,0.706,1.324,1.059
					c0.883,0.883,1.501,1.854,1.942,2.913s0.706,2.207,0.706,3.354c0,1.148-0.265,2.295-0.706,3.354s-1.059,2.03-1.942,2.913
					c-0.353,0.353-0.803,0.706-1.324,1.059c-0.441,0.353-0.98,0.618-1.501,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
					C265.975,123.498,265.357,123.586,264.828,123.586" />
			<path style="fill:#EA6148;" d="M308.966,176.552c-2.392,0-4.599-0.971-6.268-2.56c-1.598-1.677-2.56-3.972-2.56-6.268
					c0-2.295,0.962-4.59,2.56-6.268c3.266-3.266,9.269-3.266,12.535,0c1.589,1.677,2.56,3.972,2.56,6.268
					c0,0.618-0.088,1.148-0.185,1.766c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589
					c-0.353,0.441-0.706,0.883-1.059,1.324C313.556,175.581,311.349,176.552,308.966,176.552" />
			</g>
			<polygon id="yellowBox" style="fill:#ECBA16;" points="79.448,176.552 203.034,176.552 203.034,52.966 79.448,52.966 	" />-->
		</g>
		<foreignObject id="text" x="20" y="50" width="480" height="230"></foreignObject>
		<foreignObject id="button" x="18" y="325" width="460" height="200">
			<a id="action"><button></button></a>
		</foreignObject>
		<circle id="reset" cx="430" cy="352" r="15" fill="#27C93F" stroke="transparent" stroke-width="4"/>
		<circle id="power" cx="470" cy="352" r="15" fill="#FF5F56" stroke="transparent" stroke-width="4"/>
		<!--<svg id="reset" xmlns="http://www.w3.org/2000/svg" x="30" y="340" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="#27C93F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
		<svg id="power" xmlns="http://www.w3.org/2000/svg" x="460" y="340" width="24" height="24" viewBox="0 0 24 24" fill="transparent" stroke="#FF5F56" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>-->
	</svg>
`;

export default template;