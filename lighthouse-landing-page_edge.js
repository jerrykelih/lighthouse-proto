/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'lighthouse-illustration',
            type:'image',
            rect:['0px','-5222px','1162px','6171px','auto','auto'],
            fill:["rgba(0,0,0,0)",'lighthouse-mockup1.svg','0px','0px']
         },
         {
            id:'button_step2',
            type:'ellipse',
            rect:['344px','347px','45px','50px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'button_start',
            type:'rect',
            rect:['172px','301px','373px','63px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'button_step1',
            type:'ellipse',
            rect:['444px','207px','60px','64px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_lighthouse-illustration}": [
            ["style", "left", '0px'],
            ["style", "top", '-5272px']
         ],
         "${_button_start}": [
            ["style", "top", '301px'],
            ["style", "opacity", '0'],
            ["style", "left", '172px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '30%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_button_step2}": [
            ["style", "top", '347px'],
            ["style", "height", '50px'],
            ["style", "opacity", '0'],
            ["style", "left", '344px'],
            ["style", "width", '45px']
         ],
         "${_button_step1}": [
            ["style", "top", '207px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '64px'],
            ["style", "opacity", '0'],
            ["style", "left", '444px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid16", tween: [ "style", "${_lighthouse-illustration}", "left", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_lighthouse-illustration}", "top", '-4145px', { fromValue: '-5272px'}], position: 0, duration: 500 },
            { id: "eid9", tween: [ "style", "${_lighthouse-illustration}", "top", '-2802px', { fromValue: '-4145px'}], position: 500, duration: 500 },
            { id: "eid10", tween: [ "style", "${_lighthouse-illustration}", "top", '-1261px', { fromValue: '-2802px'}], position: 1000, duration: 500 },
            { id: "eid11", tween: [ "style", "${_lighthouse-illustration}", "top", '-129px', { fromValue: '-1261px'}], position: 1500, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "lighthouse");
