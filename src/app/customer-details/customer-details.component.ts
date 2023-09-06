import { Component, ViewEncapsulation } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
    `
    html,body,h1,h2,h3,h4,h5,h6 {
  font-family: 'Public Sans', sans-serif;
  color: #444440;
}

.bodyBgColor{
  background-color: #f4f4f4;
}

  /* Styles for screens between 400px and 500px */
  .circular-image {
    width: 150px !important; /* Set the desired width and height for the circular image */
    height: 150px !important;
    border-radius: 50%; /* Make the image circular */
    overflow: hidden; /* Hide any content that overflows the circular shape */
    border: 5px solid #fff;
  }

  .circular-image img {
    width: 100%; /* Make the image fill the circular container */
    height: 100%;
    object-fit: cover; /* Maintain the image's aspect ratio while covering the container */
  }

  .phoneCol img{
    width: 15px; /* Make the image fill the circular container */
    height: 15px;
  }

  li{
    list-style-type: none;
  }

  .custom-hr {
    border: 0;
    border-top: 3px solid #000; /* Replace with the desired color */
    margin: 20px auto; /* Center the HR and provide some spacing */
  }

  .summary{
    height: 250px !important;
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    width: 4px; /* Adjust the width as needed */
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 2px; /* Rounded corners */
  }

  .text-mobile-center {
    text-align: start;
  } 

  /* @media (min-width: 800px) and (max-width: 1100px) {
    .text-mobile-center {
        text-align: center;
      }
  } */

  /* @media (min-width: 750px) and (max-width: 800px) {
    .text-mobile-center {
        text-align: end;
      }
  } */

  @media (max-width: 769px) {
    .text-mobile-center {
      text-align: center;
    }
    
  }

  @media (min-width: 400px) and (max-width: 500px) {
    /* Styles for screens between 400px and 500px */
    .circular-image {
      width: 100%; /* Set the desired width and height for the circular image */
      height: 130px;
      border-radius: 50%; /* Make the image circular */
      overflow: hidden; /* Hide any content that overflows the circular shape */
      border: 5px solid #fff;
    }
  }

  @media (min-width: 200px) and (max-width: 300px) {
    /* Styles for screens between 400px and 500px */
    .circular-image {
      width: 80px !important; /* Set the desired width and height for the circular image */
      height: 80px !important;
      border-radius: 50%; /* Make the image circular */
      overflow: hidden; /* Hide any content that overflows the circular shape */
      border: 5px solid #fff;
    }
  }
  
  .timeline-centered {
    position: relative;
    margin-bottom: 30px;
  }
  .timeline-centered.timeline-sm .timeline-entry {
    margin-bottom: 20px !important;
  }
  .timeline-centered.timeline-sm .timeline-entry .timeline-entry-inner .timeline-label {
    padding: 1em;
  }
  .timeline-centered:before,
  .timeline-centered:after {
    content: " ";
    display: table;
  }
  .timeline-centered:after {
    clear: both;
  }
  .timeline-centered:before {
    content: '';
    position: absolute;
    display: block;
    width: 7px;
    /* background: #444440; */
    border-right: 2px dotted #444440;
    /* left: 50%; */
    top: 20px;
    bottom: 20px;
    margin-left: -16px;
  }
  .timeline-centered .timeline-entry {
    position: relative;
    /* width: 50%; */
    /* float: right; */
    margin-bottom: 70px;
    clear: both;
  }
  .timeline-centered .timeline-entry:before,
  .timeline-centered .timeline-entry:after {
    content: " ";
    display: table;
  }
  .timeline-centered .timeline-entry:after {
    clear: both;
  }
  .timeline-centered .timeline-entry.begin {
    margin-bottom: 0;
  }
  .timeline-centered .timeline-entry.left-aligned {
    float: left;
  }
  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner {
    margin-left: 0;
    margin-right: -28px;
  }
  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-time {
    left: auto;
    right: -115px;
    text-align: left;
  }
  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-icon {
    float: right;
  }
  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label {
    margin-left: 0;
    margin-right: 85px;
  }
  .timeline-centered .timeline-entry.left-aligned .timeline-entry-inner .timeline-label:after {
    left: auto;
    right: 0;
    margin-left: 0;
    margin-right: -9px;
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .timeline-centered .timeline-entry .timeline-entry-inner {
    position: relative;
    margin-left: -31px;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner:before,
  .timeline-centered .timeline-entry .timeline-entry-inner:after {
    content: " ";
    display: table;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner:after {
    clear: both;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time {
    position: absolute;
    left: -115px;
    text-align: right;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span {
    display: block;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:first-child {
    font-size: 18px;
    font-weight: bold;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-time > span:last-child {
    font-size: 12px;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {
    background: #fff;
    color: #999999;
    display: block;
    width: 40px;
    height: 40px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    border-radius: 50%;
    text-align: center;
    border: 7px solid #444440;
    line-height: 25px;
    font-size: 15px;
    float: left;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-primary {
    background-color: #dc6767;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-success {
    background-color: #5cb85c;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-info {
    background-color: #5bc0de;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-warning {
    background-color: #f0ad4e;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-danger {
    background-color: #d9534f;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-red {
    background-color: #bf4346;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-green {
    background-color: #488c6c;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-blue {
    background-color: #0a819c;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-yellow {
    background-color: #f2994b;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-orange {
    background-color: #e9662c;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-pink {
    background-color: #bf3773;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-violet {
    background-color: #444440;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-grey {
    background-color: #4b5d67;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.bg-dark {
    background-color: #594857;
    color: #fff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {
    position: relative;
    /* background: #ffffff; */
    padding: 1.7em;
    margin-left: 40px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-red {
    background: #bf4346;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-red:after {
    border-color: transparent #bf4346 transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-red .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-red p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-green {
    background: #488c6c;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-green:after {
    border-color: transparent #488c6c transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-green .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-green p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-orange {
    background: #e9662c;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-orange:after {
    border-color: transparent #e9662c transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-orange .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-orange p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-yellow {
    background: #f2994b;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-yellow:after {
    border-color: transparent #f2994b transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-yellow .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-yellow p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-blue {
    background: #0a819c;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-blue:after {
    border-color: transparent #0a819c transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-blue .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-blue p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-pink {
    background: #bf3773;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-pink:after {
    border-color: transparent #bf3773 transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-pink .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-pink p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-violet {
    background: #9351ad;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-violet:after {
    border-color: transparent #9351ad transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-violet .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-violet p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-grey {
    background: #4b5d67;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-grey:after {
    border-color: transparent #4b5d67 transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-grey .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-grey p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-dark {
    background: #594857;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-dark:after {
    border-color: transparent #594857 transparent transparent;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-dark .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label.bg-dark p {
    color: #ffffff;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {
    /* content: ''; */
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 9px 9px 0;
    border-color: transparent #ffffff transparent transparent;
    left: 0;
    top: 20px;
    margin-left: -30px;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label .timeline-title,
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p {
    color: #444440;
    margin: 0;
    font-size: 16px !important;
    margin-top: -18px !important;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {
    margin-top: 15px;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label .timeline-title {
    margin-bottom: 10px;
    font-family: 'Oswald';
    font-weight: bold;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label .timeline-title span {
    -webkit-opacity: .6;
    -moz-opacity: .6;
    opacity: .6;
    -ms-filter: alpha(opacity=60);
    filter: alpha(opacity=60);
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p .timeline-img {
    margin: 5px 10px 0 0;
  }
  .timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p .timeline-img.pull-right {
    margin: 5px 0 0 10px;
  }


  /* Basic styling for an outlined button */
.call-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #007bff; /* Border color */
  border-radius: 4px;
  background-color: transparent;
  color: #444440; /* Text color */
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
  margin-top: -15px !important;
}

/* On hover, change the color and border color */
.call-button:hover {
  border-color: #0056b3; /* Darker border color on hover */
  color: #444440; /* Darker text color on hover */
}

.transcript span{
  font-weight: bold;
}

.calling {
  animation: pulse 1s infinite;
}

.pulse-button {
  background-color: #0b612c;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #0b612c; /* Border color */
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
  margin-top: -10px !important;
  animation: pulse 2s infinite;
  width: 150px;
  margin-top: -15px !important;
}

.pulse-button:hover {
  background-color: none;
  color: #444440; /* Text color */
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #0b612c; /* Border color */
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
  margin-top: -10px !important;
  animation: pulse 2s infinite;
  width: 150px;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.neo-btn{
  width: auto;
  letter-spacing: 0;
  color: var(--button-text-color);
  border: 0;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: inline-flex;
}


.neo-btn-primary--success {
  background-color: var(--button-hover-color-success);
  color: var(--button-text-color);
  background-image: linear-gradient(
    50deg,
    var(--button-hover-color-success) 0%,
    var(--button-hover-color-success) 50%,
    var(--button-color-success) 50%,
    var(--button-color-success) 100%
  );
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 300%;
  transition: background-position 0.4s;
}
.neo-btn-primary--success.neo-pulse {
  animation: 2s infinite pulse--button-success;
}
@media (prefers-reduced-motion) {
  .neo-btn-primary--success.neo-pulse {
    animation-name: none;
  }
}
@keyframes pulse--button-success {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--button-color-success-rgb), 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(var(--button-color-success-rgb), 0);
  }
  to {
    box-shadow: 0 0 0 0 rgba(var(--button-color-success-rgb), 0);
  }
}
.neo-btn-primary--success:hover,
.neo-btn-primary--success:focus {
  cursor: pointer;
  background-position: 0 100%;
  transition: background-position 0.4s;
}
.neo-btn-primary--success:active {
  background-color: var(--button-pressed-color-success);
  background-image: none;
}
.neo-btn-primary--success[disabled],
.neo-btn-primary--success--disabled,
.neo-btn-primary--success[disabled]:active,
.neo-btn-primary--success[disabled]:focus,
.neo-btn-primary--success--disabled:active,
.neo-btn-primary--success--disabled:focus {
  background-color: var(--button-disabled-color-success);
  background-image: none;
}
.neo-btn-primary--success[disabled]:hover,
.neo-btn-primary--success--disabled:hover {
  cursor: not-allowed;
}
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CustomerDetailsComponent {
  constructor(private httpService: HttpService) {
    this.getCustomerDetails();
  }
  userDetails: any = {};
  summary: boolean = false;
  onGoingCall: boolean = false;
  ngOnInit() {}

  public getCustomerDetails() {
    let payload = {
      operation: 'getProfile',
      profileName: 'alexsmithfsipreviewvoice',
    };
    this.httpService
      .apiCall('post', '/public_getProfile_MongoDB_FSI_Preview', payload)
      ?.subscribe(
        (data) => {
          console.log('User Details  :', data);
          this.userDetails = data;
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

  callToCustomer(userPhone: string) {
    this.onGoingCall = true;
    window.open(`tel:${userPhone}`);
    // Simulate call duration and stop animation after a certain time
    setTimeout(() => {
      this.onGoingCall = false;
    }, 10000); // Adjust the time as needed (e.g., 10000 ms = 10 seconds)
  }
}
