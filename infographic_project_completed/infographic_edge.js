/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Background',
                type: 'image',
                rect: ['56px', '48px','751px','703px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Background.svg",'0px','0px']
            },
            {
                id: 'GridText',
                type: 'rect',
                rect: ['461', '519','auto','auto','auto', 'auto']
            },
            {
                id: 'Caption',
                type: 'text',
                rect: ['72px', '133px','auto','auto','auto', 'auto'],
                text: "If you think you've seen technology change in your day,<br>check out the story of a 1400 year old redwood tree.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 21, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Title',
                type: 'text',
                rect: ['50px', '47px','auto','auto','auto', 'auto'],
                text: "Of Time and Trees",
                font: ['Arial, Helvetica, sans-serif', 48, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Trigger0',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger1',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger2',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger3',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger4',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger5',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger6',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'Trigger7',
                type: 'rect',
                rect: ['39', '614','auto','auto','auto', 'auto']
            },
            {
                id: 'DetailPanelAnimation',
                type: 'rect',
                rect: ['135', '294','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Trigger3',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger6',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger4',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger5',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger2',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger7',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'DetailPanelAnimation',
                symbolName: 'DetailPanelAnimation'
            },
            {
                id: 'Trigger1',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'Trigger0',
                symbolName: 'TimelineTrigger'
            },
            {
                id: 'GridText',
                symbolName: 'GridText'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Trigger7}": [
                ["style", "top", '643px'],
                ["style", "left", '788px']
            ],
            "${_Title}": [
                ["style", "top", '47px'],
                ["style", "left", '50px'],
                ["style", "font-size", '48px']
            ],
            "${_Trigger6}": [
                ["style", "top", '617px'],
                ["style", "left", '726px']
            ],
            "${_Trigger5}": [
                ["style", "top", '643px'],
                ["style", "left", '660px']
            ],
            "${_Trigger4}": [
                ["style", "top", '617px'],
                ["style", "left", '566px']
            ],
            "${_Trigger3}": [
                ["style", "top", '643px'],
                ["style", "left", '485px']
            ],
            "${_Trigger1}": [
                ["style", "top", '643px'],
                ["style", "left", '228px']
            ],
            "${_Trigger0}": [
                ["style", "top", '617px']
            ],
            "${_Trigger2}": [
                ["style", "top", '617px'],
                ["style", "left", '398px']
            ],
            "${_GridText}": [
                ["style", "top", '68px'],
                ["style", "left", '29px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '380px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "max-width", '1200px'],
                ["style", "width", '850px']
            ],
            "${_Caption}": [
                ["style", "top", '133px'],
                ["style", "left", '72px'],
                ["style", "font-size", '21px']
            ],
            "${_Background}": [
                ["style", "left", '56px'],
                ["style", "top", '48px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_GridText}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_Trigger3}", "left", '485px', { fromValue: '485px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid1", tween: [ "style", "${_GridText}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_Trigger4}", "left", '566px', { fromValue: '566px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid79", tween: [ "style", "${_Trigger0}", "top", '617px', { fromValue: '617px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid100", tween: [ "style", "${_Trigger7}", "left", '788px', { fromValue: '788px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid84", tween: [ "style", "${_Trigger2}", "top", '617px', { fromValue: '617px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid107", tween: [ "style", "${_Trigger1}", "left", '228px', { fromValue: '228px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid119", tween: [ "style", "${_Trigger7}", "top", '643px', { fromValue: '643px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid105", tween: [ "style", "${_Trigger2}", "left", '398px', { fromValue: '398px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid95", tween: [ "style", "${_Trigger6}", "top", '617px', { fromValue: '617px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid116", tween: [ "style", "${_Trigger3}", "top", '643px', { fromValue: '643px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid101", tween: [ "style", "${_Trigger6}", "left", '726px', { fromValue: '726px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid102", tween: [ "style", "${_Trigger5}", "left", '660px', { fromValue: '660px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid117", tween: [ "style", "${_Trigger5}", "top", '643px', { fromValue: '643px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid89", tween: [ "style", "${_Trigger4}", "top", '617px', { fromValue: '617px'}], position: 0, duration: 0, easing: "easeOutElastic" },
                { id: "eid118", tween: [ "style", "${_Trigger1}", "top", '643px', { fromValue: '643px'}], position: 0, duration: 0, easing: "easeOutElastic" }            ]
        }
    }
},
"GridText": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['784px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy17',
                    text: '300 \'',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['60px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy16',
                    text: '1000',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['0px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy15',
                    text: '500 AD',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['125px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy14',
                    text: '1100',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['195px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy13',
                    text: '1200',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['263px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy12',
                    text: '1300',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['329px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy11',
                    text: '1400',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['402px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy10',
                    text: '1500',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['468px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy9',
                    text: '1600',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['535px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy8',
                    text: '1700',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['602px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy7',
                    text: '1800',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['676px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy6',
                    text: '1900',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['747px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy5',
                    text: '2014 AD',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '205px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy4',
                    text: '200 \'',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '102px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy3',
                    text: '250 \'',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '410px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy2',
                    text: '100 \'',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '307px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4Copy',
                    text: '150 \'',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['784px', '512px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal'],
                    id: 'Text4',
                    text: '0',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['70px', '648px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy15',
                    text: 'messenger bird',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['70px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy14',
                    text: 'Middle Ages',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['344px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy13',
                    text: 'Renaissance',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['618px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy12',
                    text: 'Industrial Revolution',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['344px', '648px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy11',
                    text: 'printing press',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['618px', '640px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy10',
                    text: 'telegraph',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['640px', '656px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy9',
                    text: 'telephone',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['713px', '647px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal'],
                    id: 'Text6Copy8',
                    text: 'internet',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text4Copy14}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '125px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy6}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '676px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy8}": [
                ["style", "top", '647px'],
                ["style", "font-weight", '500'],
                ["style", "left", '713px'],
                ["style", "font-size", '11px']
            ],
            "${_Text6Copy9}": [
                ["style", "top", '656px'],
                ["style", "font-weight", '500'],
                ["style", "left", '640px'],
                ["style", "font-size", '11px']
            ],
            "${_Text4Copy13}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '195px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy5}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '747px'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '707px'],
                ["style", "width", '815px']
            ],
            "${_Text6Copy11}": [
                ["style", "top", '648px'],
                ["style", "font-weight", '500'],
                ["style", "left", '344px'],
                ["style", "font-size", '11px']
            ],
            "${_Text6Copy15}": [
                ["style", "top", '648px'],
                ["style", "font-weight", '500'],
                ["style", "left", '70px'],
                ["style", "font-size", '11px']
            ],
            "${_Text4Copy3}": [
                ["style", "top", '102px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy12}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '263px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy10}": [
                ["style", "top", '640px'],
                ["style", "font-weight", '500'],
                ["style", "left", '618px'],
                ["style", "font-size", '11px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '410px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy9}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '468px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy8}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '535px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy16}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '60px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy15}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy11}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '329px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy17}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '307px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4}": [
                ["style", "top", '512px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy14}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '70px']
            ],
            "${_Text6Copy13}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '344px']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '205px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy12}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '618px']
            ],
            "${_Text4Copy7}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '602px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy10}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '402px'],
                ["style", "font-size", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TimelineTrigger": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['43px', '-130px', '88.2%', '88.2%', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [1, 'rgba(61,6,6,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(248,248,248,1.00)']
                },
                {
                    rect: ['11px', '4px', '35.3%', '73.5%', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 21, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'Text',
                    text: '1',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['-4px', '-4px', '38px', '38px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [2, 'rgb(100, 70, 70)', 'solid'],
                    id: 'Hitarea',
                    opacity: 0,
                    type: 'ellipse',
                    fill: ['rgba(252,252,252,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hitarea}": [
                ["style", "top", '-4px'],
                ["style", "height", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px'],
                ["style", "width", '38px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(252,252,252,1.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(100,70,70,1.00)'],
                ["style", "height", '88.24%'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '88.24%']
            ],
            "${_Text}": [
                ["style", "top", '4px'],
                ["style", "height", '73.53%'],
                ["style", "font-size", '21px'],
                ["style", "left", '11px'],
                ["style", "width", '35.3%']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "default": 0,
                "rollover": 1000,
                "rollout": 2000
            },
            timeline: [
                { id: "eid8", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_Ellipse}", "top", '-9px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid76", tween: [ "style", "${_Ellipse}", "top", '0px', { fromValue: '-9px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid61", tween: [ "style", "${_Ellipse}", "height", '138.24%', { fromValue: '88.24%'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid72", tween: [ "style", "${_Ellipse}", "height", '88.24%', { fromValue: '138.24%'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid7", tween: [ "style", "${_Ellipse}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Ellipse}", "left", '-10px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid75", tween: [ "style", "${_Ellipse}", "left", '-1px', { fromValue: '-10px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid63", tween: [ "style", "${_Ellipse}", "width", '138.24%', { fromValue: '88.24%'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid73", tween: [ "style", "${_Ellipse}", "width", '88.24%', { fromValue: '138.24%'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid69", tween: [ "style", "${_Text}", "font-size", '28px', { fromValue: '21px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid74", tween: [ "style", "${_Text}", "font-size", '21px', { fromValue: '28px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid65", tween: [ "style", "${_Text}", "top", '-4px', { fromValue: '4px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid77", tween: [ "style", "${_Text}", "top", '5px', { fromValue: '-4px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid67", tween: [ "style", "${_Text}", "left", '6px', { fromValue: '11px'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid78", tween: [ "style", "${_Text}", "left", '9px', { fromValue: '6px'}], position: 2000, duration: 500, easing: "easeOutElastic" }            ]
        }
    }
},
"DetailPanel": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['30px', '67px', '398px', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 21, 'rgba(59,59,59,1.00)', '400', 'none', 'normal'],
                    opacity: 1,
                    id: 'Details',
                    text: 'While Europe enters its  early middle ages,<br>a redwood seedling sprouts in a quiet grove<br>in Northern California.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['15px', '-48px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 72, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    opacity: 1,
                    id: 'Year',
                    text: '614 AD',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['63px', '17px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 36, 'rgba(107,107,107,1.00)', '600', 'none', 'normal'],
                    opacity: 1,
                    id: 'Caption',
                    text: 'Seedling',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Year}": [
                ["style", "top", '-48px'],
                ["style", "font-weight", '700'],
                ["style", "opacity", '1'],
                ["style", "left", '15px'],
                ["style", "font-size", '72px']
            ],
            "${_Details}": [
                ["style", "top", '67px'],
                ["style", "font-size", '21px'],
                ["color", "color", 'rgba(59,59,59,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "width", '398px']
            ],
            "${_Caption}": [
                ["style", "top", '17px'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(107,107,107,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '63px'],
                ["style", "font-size", '36px']
            ],
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '445px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"DetailPanelAnimation": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'DetailPanel',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'DetailPanel',
                symbolName: 'DetailPanel',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_DetailPanel}": [
                ["style", "top", '520px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '445px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "default": 0,
                "show": 1000,
                "hide": 2000
            },
            timeline: [
                { id: "eid285", tween: [ "style", "${_DetailPanel}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutBack" },
                { id: "eid287", tween: [ "style", "${_DetailPanel}", "opacity", '0', { fromValue: '1'}], position: 2009, duration: 491, easing: "easeInBack" },
                { id: "eid288", tween: [ "style", "${_DetailPanel}", "top", '520px', { fromValue: '520px'}], position: 0, duration: 0, easing: "easeInBack" },
                { id: "eid283", tween: [ "style", "${_DetailPanel}", "top", '0px', { fromValue: '246px'}], position: 1000, duration: 750, easing: "easeOutBack" },
                { id: "eid286", tween: [ "style", "${_DetailPanel}", "top", '-221px', { fromValue: '0px'}], position: 2009, duration: 491, easing: "easeInBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-96832037");
