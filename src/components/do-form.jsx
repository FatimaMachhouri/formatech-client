import React from 'react';
import '../style/do-form.css';

import PropTypes from 'prop-types';


class DoForm extends React.Component{
  
  render() {
    return (
      <svg version="1.1" viewBox="0 0 1186.8 666.8" >
        <g id="PRO" onClick={() => this.props.handleClick('Pro')}>
          <path className="do0" d="M593.4,539.7c5.9-8.6,12-17.1,17.7-25.9c23.8-36.7,40.1-77.9,47.8-121c2.3-12.6,3.4-25.3,4.9-37.9
            c2.3,0.5,1.8,2.5,2,4c9.5,76.8,68.8,142.2,144.6,159.7c1.3,0.3,2.6,0.7,4.4,1.1c-1.1,1.7-1.9,3.2-2.9,4.7
            c-12.6,18.8-25.2,37.6-37.9,56.3c-1.4,2.1-2.4,4.1-1.9,6.9c3.4,22,6.5,44.1,10.2,66.1c0.8,4.8-0.9,4.5-4.2,3.7
            c-19.2-4.6-38-10.9-56.2-18.8c-49.4-21.5-92.8-54.6-126.6-96.5C594.5,541.4,594,540.5,593.4,539.7z"/>
          <path className="do1" d="M647.7,512.6l-5-5.9l-10.5,9l-6.6-7.7l35.2-30l12.3,14.4c7.2,8.4,6.5,17.7-0.7,23.8l-0.1,0.1
            C664.1,523.2,654.5,520.5,647.7,512.6z M665.5,508.5c3.5-3,3.3-7,0-10.8l-5.1-6l-10.8,9.2l5.2,6.1
            C658.1,510.8,662.4,511.1,665.5,508.5L665.5,508.5z"/>
          <path className="do1" d="M680.5,562.3l1.5-17.7l-6.2-5l-9.3,11.5l-7.9-6.4l29-36L704,522c8.5,6.8,10,15.4,4,22.8l-0.1,0.1
            c-4.7,5.8-10.8,6.9-16.7,4.9l-1.6,19.9L680.5,562.3z M699.7,538.8c2.7-3.4,1.8-7-2.1-10.2l-7.9-6.3l-8.3,10.3l8,6.5
            c3.8,3.1,7.7,2.8,10.2-0.2L699.7,538.8z"/>
          <path className="do1" d="M722.3,588.1c-12.9-6-17.8-19.9-12.2-31.8l0.1-0.1c5.5-11.9,19.4-17.3,32.4-11.3s17.8,19.9,12.3,31.8l-0.1,0.1
            C749.2,588.6,735.2,594.1,722.3,588.1z M745,572.3c3.3-7.2,0.8-15.6-6.6-19s-15.3,0-18.6,7.2l-0.1,0.1c-3.3,7.2-0.8,15.6,6.6,19
            s15.3,0,18.6-7.2L745,572.3z"/>
        </g>

         
        <g id="OPS" onClick={() => this.props.handleClick('Ops')}>
          <path  className="do2" d="M593.4,539.7c-6.4,7.2-12.5,14.7-19.2,21.7c-49.7,52.2-109.8,85.7-180.7,99.4c-20.6,3.9-41.6,5.9-62.5,6
            c-4.3,0-4.6-1-3.2-4.8c8.2-20.9,16.2-41.9,24.4-62.8c1.1-2.4,1.1-5.2,0-7.6c-8.1-20.8-16.1-41.6-24.2-62.4c-2-5.3-2-5.3,3.8-5.4
            c66.9-1.3,119.4-29.7,157.6-84.5c16.5-23.7,26.2-50.4,30.2-79c0.4-3.2,1.7-4.6,4.5-5.7c22.3-8.6,44.7-17.3,67-26
            c1.7-0.8,3.5-0.8,5.2-0.1c22.4,8.8,44.9,17.6,67.4,26.4c-1.5,12.6-2.6,25.4-4.9,37.9c-7.7,43.1-24,84.3-47.8,121
            C605.4,522.6,599.3,531.1,593.4,539.7z"/>
          <path className="do1" d="M495.4,562.5c-13.9,8.4-30,4.1-37.8-8.6l-0.1-0.1c-7.8-12.8-4-29.3,9.8-37.7s30-4.1,37.8,8.6l0.1,0.1
            C513,537.5,509.3,554,495.4,562.5z M494.9,531c-4.7-7.7-14.2-10.7-22.1-5.8s-9.6,14.5-5,22.2l0.1,0.1c4.7,7.7,14.2,10.7,22.2,5.8
            s9.6-14.5,5-22.2L494.9,531z"/>
          <path className="do1" d="M535.9,510.1l-6.3,6.1l11,11.3l-8.3,8.1l-36.6-37.6l15.4-15c9-8.7,19.6-8.7,27.1-1l0.1,0.1
            C546.8,490.8,544.4,501.9,535.9,510.1z M529.9,490.3c-3.6-3.7-8.1-3.2-12.3,0.8l-6.4,6.2l11.2,11.5l6.6-6.4c4.1-4,4.2-8.9,1-12.1
            L529.9,490.3z"/>
          <path className="do1" d="M582.7,479.1c-4.5,6.8-11.4,11.8-19.4,13.9l-3-10.2c5.9-1.8,10.7-4.5,14-9.5c2.6-3.9,2.6-7.4,0.1-9l-0.1-0.1
            c-2.4-1.6-4.7-1-11.4,5.1c-8.1,7.3-14.3,11.4-23,5.6l-0.1-0.1c-7.9-5.3-8.9-15.1-3-24.1c3.8-6,9.6-10.4,16.4-12.5l3.9,9.8
            c-5.3,2.1-9.4,4.8-11.9,8.5s-2.1,6.7,0.1,8.1l0.1,0.1c2.9,1.9,5.1,0.7,12-5.6c8.2-7.3,14.7-10.2,22.3-5.1l0.1,0.1
            C588.5,459.8,589,469.7,582.7,479.1z"/>
        </g>
        
        <g id="SECURITE" onClick={() => this.props.handleClick('Sécurité')}>
          <path className="do3" d="M1040.3,373.2c15.2,10.2,29.8,20.1,44.3,30c4.7,3.2,9.6,6.1,14,9.6c3.7,3,7.6,3.4,12.1,2.7
            c21.4-3.3,42.8-6.3,64.2-9.6c4.3-0.7,4.1,0.9,3.3,4.2c-29.2,112.5-97.6,191.1-205.4,234.5c-54.8,22-111.9,26.8-170.3,18.1
            c-4.8-0.7-6.1-2.8-6.7-7.1c-3-21.2-6.3-42.5-9.6-63.7c-0.5-2.4-0.1-5,1.3-7c13.3-19.7,26.7-39.4,39.7-59.4c2.4-3.7,5.2-2.8,8.2-2.5
            c27.4,2.7,54.3,0.2,80.2-9.3c64.4-23.5,105.4-68.7,123.3-134.9C1039.3,377.1,1039.7,375.5,1040.3,373.2z"/>
          <path className="do1" d="M835.3,616.8c-7.2,0.1-14.2-2.4-19.7-7.1l5.9-7.3c4.2,3.4,8.6,5.5,13.9,5.4c4.2-0.1,6.6-1.8,6.6-4.5v-0.1
            c0-2.6-1.7-3.9-9.4-5.7c-9.3-2.2-15.4-4.7-15.5-13.9v-0.1c-0.1-8.4,6.5-14,16-14.2c6.2-0.2,12.3,1.8,17.2,5.6l-5.2,7.7
            c-4.1-2.8-8.2-4.4-12.1-4.4s-5.9,1.9-5.9,4.1v0.1c0,3,2,4,10.1,5.9c9.4,2.3,14.7,5.6,14.8,13.7v0.1
            C852.2,611.4,845.3,616.7,835.3,616.8z"/>
          <path className="do1" d="M863.5,615.2l-4.6-46l34.7-3.4l0.9,9l-24.6,2.4l0.9,9.3l21.7-2.1l0.9,9l-21.7,2.2l1,9.7l25-2.5l0.9,9
            L863.5,615.2z"/>
          <path className="do1" d="M931.9,606.4c-12.6,2.9-25.1-5-27.9-17.6c-0.1-0.3-0.1-0.5-0.2-0.8v-0.1c-2.7-12.8,4.8-25.4,18.7-28.3
            c8.5-1.8,14.2,0,19.3,3.2l-4.8,8.6c-4.2-2.4-8.1-3.6-12.6-2.7c-7.6,1.6-11.8,9.1-10.2,16.8v0.1c1.6,7.8,8.3,13.1,16.1,11.5
            c5.2-1.1,7.9-3.8,10.8-7.8l7.7,5.1C945.1,600.3,940.6,604.5,931.9,606.4z"/>
          <path className="do1" d="M980.5,592.3c-11.6,4.3-21.2,0.4-25.9-12.3l-9.2-24.8l9.5-3.5l9,24.5c2.6,7.1,7.5,9.4,13.3,7.3s8-7,5.5-13.9
            l-9.2-24.8l9.5-3.5l9,24.5C997.1,578.8,992.1,588,980.5,592.3z"/>
          <path className="do1" d="M1037.6,562.9l-16.2-7.4l-6.8,4.2l7.7,12.6l-8.7,5.3l-24.1-39.4l18-11c9.3-5.7,17.9-4.2,22.8,3.9l0.1,0.1
            c3.9,6.4,2.9,12.5-1,17.4l18.2,8.2L1037.6,562.9z M1021.9,536.9c-2.3-3.7-6-4-10.3-1.5l-8.6,5.3l6.9,11.3l8.8-5.4
            c4.2-2.6,5.3-6.3,3.2-9.6L1021.9,536.9z"/>
          <path className="do1" d="M1057.8,547.5l-30.4-34.8l7.7-6.7l30.4,34.8L1057.8,547.5z"/>
          <path className="do1" d="M1060.2,489.7l29.8,21.6l-6,8.2l-29.8-21.6l-8.2,11.4l-7.6-5.5l22.5-31l7.6,5.5L1060.2,489.7z"/>
          <path className="do1" d="M1103.9,490l-40.5-22.3l16.8-30.5l7.9,4.4l-11.9,21.7l8.2,4.5l10.5-19.1l7.9,4.4l-10.5,19.1l8.5,4.7l12.1-22
            l7.9,4.4L1103.9,490z"/>
        </g>
        
        <g id="EXPLOIT" onClick={() => this.props.handleClick('Exploitation')}>
          <path className="do4" d="M1186.8,333.7c0.2,17.7-1.8,35.2-4.1,52.7c-0.5,3.6-1.8,5.2-5.8,5.7c-22.4,3.1-44.8,6.5-67.1,10
            c-2,0.3-4-0.2-5.5-1.4c-19.6-13.3-39.1-26.6-58.8-39.7c-2.6-1.7-2.9-3.6-2.6-6.3c3.8-36.1-1.5-70.8-17.7-103.4
            c-26.4-53.2-68.7-87.2-126.1-102.1c-4.5-1.2-4.9-2.1-2.3-5.8c12.3-18,24.5-36.1,36.7-54.2c1.5-2,2.1-4.5,1.6-6.9
            c-3.5-22.7-6.8-45.4-10.1-68.1c-0.8-5.7-0.7-5.8,4.8-4.5c76.1,18.3,138.4,58.2,186.8,119.7c35,44.4,56.7,94.9,66,150.6
            C1185.5,297.7,1187,315.7,1186.8,333.7z"/>
          <path className="do1" d="M970.6,107.4l32.7-32.6l24.6,24.7l-6.4,6.4L1004,88.3l-6.6,6.7l15.4,15.4l-6.4,6.4L991,101.3l-6.9,6.8
            l17.7,17.8l-6.4,6.4L970.6,107.4z"/>
          <path className="do1" d="M1019.6,160.3l5.4-18.1l-18.8,2.3l-7.5-8.8l28.3-2.9l7.4-26.4l7.7,9.1l-5.2,17.1l17.7-2.2l7.5,8.8l-27.2,2.8
            l-7.7,27.6L1019.6,160.3z"/>
          <path className="do1" d="M1052.7,181.5l-4.4-6.3l-11.4,7.9l-5.8-8.3l37.9-26.4l10.8,15.5c6.3,9,4.7,18.2-3,23.6l-0.1,0.1
            C1067.9,193.6,1058.6,190,1052.7,181.5z M1070.7,179.1c3.7-2.6,3.9-6.6,1-10.8l-4.5-6.4l-11.6,8.1l4.6,6.6
            c2.9,4.2,7.1,4.9,10.3,2.6L1070.7,179.1z"/>
          <path className="do1" d="M1055.2,210.3l40.4-22.4l4.9,8.9l-32.3,17.9l11.2,20.2l-8.1,4.5L1055.2,210.3z"/>
          <path className="do1" d="M1080.5,263.6c-5.2-13.3,1-26.7,13.2-31.5l0.1-0.1c12.2-4.8,26,0.9,31.2,14.2c5.2,13.3-1,26.7-13.2,31.5
            l-0.1,0C1099.5,282.6,1085.7,276.9,1080.5,263.6z M1107.8,268c7.4-2.9,11.4-10.7,8.4-18.3s-11.1-10.5-18.5-7.6h-0.1
            c-7.4,2.9-11.4,10.7-8.4,18.3s11.1,10.5,18.4,7.6H1107.8z"/>
          <path className="do1" d="M1092.2,294.7l44.2-13.5l3,9.7l-44.2,13.5L1092.2,294.7z"/>
          <path className="do1" d="M1139.3,326.1l-35.7,9.2l-2.5-9.8l35.7-9.2l-3.5-13.6l9.1-2.3l9.5,37.1l-9.1,2.3L1139.3,326.1z"/>
        </g>

        <g id="SI" onClick={() => this.props.handleClick('SI')}>
          <path className="do5" d="M142.8,328.7c-0.3,19.2,1.6,37.6,7.3,55.3c23.7,74.1,73.6,119.3,149.9,134.5c9.6,1.9,14.6,5.1,17.7,14.5
            c6.3,18.9,14.1,37.3,21.4,55.8c1.1,2.6,1.1,5.5,0,8.1c-8.2,20.9-16.3,41.8-24.2,62.8c-1.2,3.3-2.9,4-6.2,3.8
            C160.9,652.4,39.6,547.1,7.5,402c-5-22.8-7.5-46.1-7.5-69.4c0-3.7,0.6-4.5,4.4-3c21.3,8.5,42.8,16.6,64.1,25
            c2.4,1.1,5.2,1.1,7.6,0.1c19.9-7.9,39.9-15.7,59.9-23.5C137.9,330.4,140,329.7,142.8,328.7z"/>
          <path className="do1" d="M114,529.2c-6.9-8-10.4-18.3-9.8-28.8l14-0.7c-0.1,8,1.5,14.9,6.4,20.7c3.9,4.5,8.2,5.6,11.4,2.9l0.1-0.1
            c3-2.6,3.1-5.7-1.9-16c-6-12.5-8.6-21.7,2.1-30.9l0.1-0.1c9.8-8.5,22.6-6.7,31.5,3.5c6,6.8,9.3,15.5,9.3,24.6l-13.9,2
            c-0.5-7.3-2.3-13.4-6-17.7s-7.7-4.7-10.3-2.4l-0.1,0.1c-3.5,3.1-2.8,6.2,2.3,17c6,12.7,7,21.8-2.4,29.9l-0.1,0.1
            C135.9,542.5,123.3,540.1,114,529.2z"/>
          <path className="do1" d="M145.4,560.1l46.9-53.7l11,9.6l-46.9,53.7L145.4,560.1z"/>
        </g>
        
        <g id="DATA" onClick={() => this.props.handleClick('Data')}>
          <path className="do6" d="M593,127.9c13.5-16.1,27.6-31.6,43.6-45.3C686,40.3,742.8,14.1,807.2,4.7c32.2-4.6,64.9-4.5,97.1,0.2
            c4.7,0.7,6.9,2.1,7.6,7.3c2.9,22.8,6.4,45.5,9.8,68.2c0.3,2.1-0.5,3.5-1.5,5c-12.8,18.9-25.6,37.7-38.1,56.8
            c-2.7,4.1-6,2.7-9.2,2.4c-22.4-2.1-44.8-1-66.3,5.4c-76.7,22.7-123.4,73.4-139.3,152c-2.2,11.3-3.1,22.8-2.7,34.3
            c0.1,3.8-0.9,4.1-4.2,2.8c-20.6-8.1-41.2-16-61.8-24.1c-2.7-1.2-5.8-1.1-8.6,0.1c-20.7,8.2-41.5,16.2-62.3,24.2
            c-1.5,0.6-3.1,1.1-6.2,2.2v-22.6c2.1-7.5,1.7-15.4,2.6-23.1c4.1-35.2,13.7-69.5,28.5-101.7C563.5,170.5,577.3,148.6,593,127.9z"/>
          <path className="do1" d="M666.7,211.8L654.2,228L612.7,196l12.5-16.2c10.1-13.1,26-15.2,37.7-6.2l0.1,0.1
            C674.7,182.7,676.8,198.7,666.7,211.8z M655.6,183.2c-7.4-5.7-16.4-4.6-22.2,2.9l-5.4,7.1l25.1,19.3l5.5-7.1
            c5.8-7.5,4.6-16.4-2.8-22.1L655.6,183.2z"/>
          <path className="do1" d="M713.1,155.8l-12-4.1l-14.6,16.7l5.7,11.4l-7.8,8.9l-25-51.7l7-8l54.6,17.9L713.1,155.8z M673.3,142.2
            l8.2,16.5l9.2-10.5L673.3,142.2z"/>
          <path className="do1" d="M708.9,100.2l29.5,29.7l-8.2,8.1l-29.5-29.7l-11.3,11.3l-7.5-7.6l30.8-30.7l7.5,7.6L708.9,100.2z"/>
          <path className="do1" d="M780.5,93.1L769.3,87l-17.2,14l3.7,12.2l-9.1,7.4l-16-55.2l8.2-6.7l50.9,26.7L780.5,93.1z M743.5,72.9
            l5.4,17.6l10.8-8.8L743.5,72.9z"/>
        </g>
        
        <g id="IA" onClick={() => this.props.handleClick('IA')}>
          <path className="do7" d="M592.7,127.7c-15.8,20.7-29.6,42.5-40.5,66.2c-14.8,32.2-24.5,66.5-28.5,101.7c-0.9,7.7-0.5,15.5-2.6,23.1
            c-7.8-84.7-65.6-151.1-148.4-170.5c-5-1.1-10.1-2-15.2-2.6c-2.7-0.1-5-1.9-5.7-4.5c-8.2-21.4-16.5-42.8-24.9-64.1
            c-1-2.5-1-5.2,0.1-7.6c8.3-21.2,16.6-42.4,24.7-63.7c1.1-3,2.3-4.1,5.6-3.8c82.3,7.3,152.8,40.2,211.3,98.5
            C577.1,109,585.2,118.1,592.7,127.7z"/>
          <path className="do1" d="M454.8,129.1l25.4-46l10.1,5.6l-25.3,46L454.8,129.1z"/>
          <path className="do1" d="M505.7,163.8l3.5-12.2l-17.5-13.7l-11,6.3l-9.3-7.3l50.3-27.7l8.4,6.6l-15,55.5L505.7,163.8z M517.3,123.2
            l-16,9.1l11,8.6L517.3,123.2z"/>
        </g>

        <g id="DEV" onClick={() => this.props.handleClick('Dev')}>
          <path className="do8" d="M340.3,0c-6.7,17.3-13.1,33.9-19.5,50.4c-2.3,6-4.6,12.1-7.1,18.1c-1,2.4-1,5.2,0.1,7.6
            c8.1,20.4,16,40.9,23.9,61.4c0.6,1.5,1.7,2.9,1.1,5.1c-13.1-0.3-26.2,0.6-39.1,2.8c-42.4,7.7-78.2,27.4-107.3,59.2
            c-27.7,30.3-43.9,66-48.4,106.8c0,2.2-1.5,4.1-3.6,4.7c-21.9,8.4-43.8,16.9-65.6,25.4c-1.7,0.7-3.6,0.7-5.2-0.1
            C47.8,333,25.9,324.4,4,316.1c-3-1.1-3.4-2.5-3.2-5.5C9.5,170.9,106.8,51.7,239.8,13.2C272.4,3.8,305.6-0.3,340.3,0z"/>
          <path className="do1" d="M140.1,213.7l-10.4,17.6l-45.2-26.7l10.4-17.6c8.4-14.2,23.9-18.3,36.7-10.8l0.1,0.1
            C144.4,183.9,148.4,199.5,140.1,213.7z M125.5,186.7c-8-4.7-16.9-2.6-21.7,5.6l-4.5,7.7l27.2,16.1l4.5-7.7
            c4.8-8.1,2.6-16.9-5.5-21.6L125.5,186.7z"/>
          <path className="do1" d="M159.1,184.1l-37.7-36.6l27.6-28.4l7.4,7.2l-19.6,20.2l7.6,7.4l17.2-17.8l7.4,7.2L151.8,161l7.9,7.7
            l19.9-20.4l7.4,7.2L159.1,184.1z"/>
          <path className="do1" d="M215.9,138.4l-8.9,4.9l-44-36.1l11.2-6.1l29.8,25.8l-5.8-39l10.9-6L215.9,138.4z"/>
        </g>
      </svg>
    );
  }
}

DoForm.propTypes = {
  handleClick: PropTypes.func
}


export default DoForm;