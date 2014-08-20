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
                rect: ['45px', '37px','761px','712px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Background.svg",'0px','0px']
            },
            {
                id: 'GridText',
                type: 'rect',
                rect: ['461', '519','auto','auto','auto', 'auto']
            },
            {
                id: 'Introduction',
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
                id: 'Group',
                type: 'group',
                rect: ['36', '619','780','56','auto', 'auto'],
                c: [
                {
                    id: 'Trigger0',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger1',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger2',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger3',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger4',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger5',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger6',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                },
                {
                    id: 'Trigger7',
                    type: 'rect',
                    rect: ['272px', '-7px','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                }]
            },
            {
                id: 'DetailPanelAnimation',
                type: 'rect',
                rect: ['135', '294','auto','auto','auto', 'auto']
            },
            {
                id: 'PlayButton',
                type: 'rect',
                rect: ['338px', '323px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'Trigger3',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'Trigger6',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'Trigger4',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'Trigger5',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'Trigger2',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'PlayButton',
                symbolName: 'PlayButton',
                autoPlay: {

                }
            },
            {
                id: 'Trigger7',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'DetailPanelAnimation',
                symbolName: 'DetailPanelAnimation',
                autoPlay: {

                }
            },
            {
                id: 'Trigger1',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'Trigger0',
                symbolName: 'TimelineTrigger',
                autoPlay: {

                }
            },
            {
                id: 'GridText',
                symbolName: 'GridText',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Title}": [
                ["style", "top", '47px'],
                ["style", "left", '50px'],
                ["style", "font-size", '48px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '380px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "max-width", '1200px'],
                ["style", "width", '850px']
            ],
            "${_Trigger5}": [
                ["style", "top", '23px'],
                ["style", "left", '633px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Introduction}": [
                ["style", "top", '133px'],
                ["style", "left", '72px'],
                ["style", "font-size", '21px']
            ],
            "${_Trigger0}": [
                ["style", "top", '-2px'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger7}": [
                ["style", "top", '23px'],
                ["style", "left", '752px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger6}": [
                ["style", "top", '-2px'],
                ["style", "left", '699px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger2}": [
                ["style", "top", '-2px'],
                ["style", "left", '362px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger3}": [
                ["style", "top", '23px'],
                ["style", "left", '454px'],
                ["style", "cursor", 'pointer']
            ],
            "${_GridText}": [
                ["style", "top", '68px'],
                ["style", "left", '29px']
            ],
            "${_PlayButton}": [
                ["style", "top", '294px'],
                ["style", "left", '345px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger4}": [
                ["style", "top", '-2px'],
                ["style", "left", '531px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Trigger1}": [
                ["style", "top", '23px'],
                ["style", "left", '188px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Background}": [
                ["style", "left", '45px'],
                ["style", "top", '37px']
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
                { id: "eid407", tween: [ "style", "${_Trigger1}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid416", tween: [ "style", "${_Trigger3}", "left", '454px', { fromValue: '454px'}], position: 0, duration: 0 },
                { id: "eid328", tween: [ "style", "${_GridText}", "left", '29px', { fromValue: '29px'}], position: 0, duration: 0 },
                { id: "eid418", tween: [ "style", "${_Trigger4}", "left", '531px', { fromValue: '531px'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_PlayButton}", "top", '294px', { fromValue: '294px'}], position: 0, duration: 0 },
                { id: "eid296", tween: [ "style", "${_Trigger7}", "left", '752px', { fromValue: '752px'}], position: 0, duration: 0 },
                { id: "eid385", tween: [ "style", "${_Trigger2}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid414", tween: [ "style", "${_Trigger1}", "left", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
                { id: "eid408", tween: [ "style", "${_Trigger7}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid415", tween: [ "style", "${_Trigger2}", "left", '362px', { fromValue: '362px'}], position: 0, duration: 0 },
                { id: "eid386", tween: [ "style", "${_Trigger6}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_PlayButton}", "left", '345px', { fromValue: '345px'}], position: 0, duration: 0 },
                { id: "eid378", tween: [ "style", "${_Trigger6}", "left", '699px', { fromValue: '699px'}], position: 0, duration: 0 },
                { id: "eid419", tween: [ "style", "${_Trigger5}", "left", '633px', { fromValue: '633px'}], position: 0, duration: 0 },
                { id: "eid327", tween: [ "style", "${_GridText}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
                { id: "eid409", tween: [ "style", "${_Trigger3}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid410", tween: [ "style", "${_Trigger5}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
                { id: "eid383", tween: [ "style", "${_Trigger4}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid384", tween: [ "style", "${_Trigger0}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid290", tween: [ "style", "${_Trigger0}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"PlayButton": {
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
                    id: 'play',
                    type: 'image',
                    rect: ['0px', '0px', '124px', '124px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play.svg', '0px', '0px']
                },
                {
                    rect: ['-7px', '0px', '135px', '124px', 'auto', 'auto'],
                    id: 'Hitarea',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,44,44,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Hitarea}": [
                ["style", "opacity", '0']
            ],
            "${_play}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '124px'],
                ["style", "width", '124px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4750,
            autoPlay: false,
            labels: {
                "default": 0,
                "show": 1000,
                "rollover": 2000,
                "rollout": 3000,
                "hide": 4000
            },
            timeline: [
                { id: "eid236", tween: [ "style", "${_play}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_play}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 750 },
                { id: "eid59", tween: [ "style", "${_play}", "opacity", '0.5', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeOutElastic" },
                { id: "eid62", tween: [ "style", "${_play}", "opacity", '1', { fromValue: '0.500000'}], position: 3000, duration: 750, easing: "easeOutElastic" },
                { id: "eid63", tween: [ "style", "${_play}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750 },
                { id: "eid238", tween: [ "transform", "${_play}", "scaleX", '1.3', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeOutElastic" },
                { id: "eid240", tween: [ "transform", "${_play}", "scaleX", '1', { fromValue: '1.3'}], position: 3000, duration: 750, easing: "easeOutElastic" },
                { id: "eid239", tween: [ "transform", "${_play}", "scaleY", '1.3', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeOutElastic" },
                { id: "eid241", tween: [ "transform", "${_play}", "scaleY", '1', { fromValue: '1.3'}], position: 3000, duration: 750, easing: "easeOutElastic" }            ]
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
                    rect: ['0px', '0px', '24px', '25px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [2, 'rgba(155,133,121,1.00)', 'solid'],
                    id: 'Ellipse',
                    opacity: 1,
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    rect: ['9px', '5px', '13px', '28px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 18, 'rgba(86,86,86,1.00)', '700', 'none', 'normal'],
                    align: 'left',
                    id: 'Text',
                    opacity: 1,
                    text: '0',
                    type: 'text'
                },
                {
                    rect: ['-7px', '-5px', '41px', '44px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Hitarea',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,44,44,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '24px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '25px'],
                ["color", "border-color", 'rgba(155,133,121,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '28px']
            ],
            "${_Hitarea}": [
                ["color", "background-color", 'rgba(255,44,44,1.00)'],
                ["style", "top", '-5px'],
                ["style", "height", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px'],
                ["style", "width", '41px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(86,86,86,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '9px'],
                ["style", "font-size", '18px'],
                ["style", "top", '5px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '28px'],
                ["style", "opacity", '1'],
                ["transform", "scaleX", '1'],
                ["style", "width", '13px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2514,
            autoPlay: false,
            labels: {
                "default": 0,
                "rollover": 1000,
                "rollout": 1997
            },
            timeline: [
                { id: "eid229", tween: [ "transform", "${_Text}", "scaleY", '1.5', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid233", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1.5'}], position: 1997, duration: 517, easing: "easeOutElastic" },
                { id: "eid231", tween: [ "transform", "${_Ellipse}", "scaleY", '1.5', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid235", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '1.5'}], position: 1997, duration: 517, easing: "easeOutElastic" },
                { id: "eid243", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid228", tween: [ "transform", "${_Text}", "scaleX", '1.5', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid232", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1.5'}], position: 1997, duration: 517, easing: "easeOutElastic" },
                { id: "eid230", tween: [ "transform", "${_Ellipse}", "scaleX", '1.5', { fromValue: '1'}], position: 1000, duration: 500, easing: "easeOutElastic" },
                { id: "eid234", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '1.5'}], position: 1997, duration: 517, easing: "easeOutElastic" },
                { id: "eid242", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" }            ]
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
                    type: 'text',
                    rect: ['30px', '67px', '398px', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Details',
                    text: 'While Europe enters its  early middle ages,<br>a redwood seedling sprouts in a quiet grove<br>in Northern California.',
                    opacity: 1,
                    font: ['Arial, Helvetica, sans-serif', 21, 'rgba(59,59,59,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['15px', '-48px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Year',
                    text: '614 AD',
                    opacity: 1,
                    font: ['Arial, Helvetica, sans-serif', 72, 'rgba(0,0,0,1)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['63px', '17px', 'auto', 'auto', 'auto', 'auto'],
                    align: 'left',
                    id: 'Caption',
                    text: 'Seedling',
                    opacity: 1,
                    font: ['Arial, Helvetica, sans-serif', 36, 'rgba(107,107,107,1.00)', '600', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '445px']
            ],
            "${_Details}": [
                ["style", "top", '67px'],
                ["style", "width", '398px'],
                ["color", "color", 'rgba(59,59,59,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '30px'],
                ["style", "font-size", '21px']
            ],
            "${_Caption}": [
                ["style", "top", '17px'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(107,107,107,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '63px'],
                ["style", "font-size", '36px']
            ],
            "${_Year}": [
                ["style", "top", '-48px'],
                ["style", "font-weight", '700'],
                ["style", "opacity", '1'],
                ["style", "left", '15px'],
                ["style", "font-size", '72px']
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
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '445px']
            ],
            "${_DetailPanel}": [
                ["style", "top", '520px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                    type: 'text',
                    rect: ['784px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy17',
                    text: '300 \'',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['60px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy16',
                    text: '1000',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['0px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy15',
                    text: '500 AD',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['125px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy14',
                    text: '1100',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['195px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy13',
                    text: '1200',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['263px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy12',
                    text: '1300',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['329px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy11',
                    text: '1400',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['402px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy10',
                    text: '1500',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['468px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy9',
                    text: '1600',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['535px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy8',
                    text: '1700',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['602px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy7',
                    text: '1800',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['676px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy6',
                    text: '1900',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['747px', '610px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy5',
                    text: '2014 AD',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['784px', '205px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy4',
                    text: '200 \'',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['784px', '102px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy3',
                    text: '250 \'',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['784px', '410px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy2',
                    text: '100 \'',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['784px', '307px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4Copy',
                    text: '150 \'',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['784px', '512px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text4',
                    text: '0',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1.00)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['70px', '648px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy15',
                    text: 'messenger bird',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['70px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy14',
                    text: 'Middle Ages',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['344px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy13',
                    text: 'Renaissance',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['618px', '692px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy12',
                    text: 'Industrial Revolution',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['344px', '648px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy11',
                    text: 'printing press',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['618px', '640px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy10',
                    text: 'telegraph',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['640px', '656px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy9',
                    text: 'telephone',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['713px', '647px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text6Copy8',
                    text: 'internet',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(90,90,90,1)', '500', 'none', 'normal']
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
            "${_Text4Copy3}": [
                ["style", "top", '102px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
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
            "${_Text6Copy9}": [
                ["style", "top", '656px'],
                ["style", "font-weight", '500'],
                ["style", "left", '640px'],
                ["style", "font-size", '11px']
            ],
            "${_Text6Copy15}": [
                ["style", "top", '648px'],
                ["style", "font-weight", '500'],
                ["style", "left", '70px'],
                ["style", "font-size", '11px']
            ],
            "${_Text6Copy10}": [
                ["style", "top", '640px'],
                ["style", "font-weight", '500'],
                ["style", "left", '618px'],
                ["style", "font-size", '11px']
            ],
            "${_Text4Copy12}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '263px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy10}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '402px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy12}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '618px']
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
            "${_Text6Copy13}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '344px']
            ],
            "${_Text6Copy14}": [
                ["style", "top", '692px'],
                ["style", "font-weight", '500'],
                ["style", "left", '70px']
            ],
            "${_Text4}": [
                ["style", "top", '512px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
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
            "${_Text4Copy11}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '329px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy15}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy16}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '60px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '205px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '410px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '784px'],
                ["style", "font-size", '12px']
            ],
            "${_Text4Copy7}": [
                ["style", "top", '610px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '602px'],
                ["style", "font-size", '12px']
            ],
            "${_Text6Copy11}": [
                ["style", "top", '648px'],
                ["style", "font-weight", '500'],
                ["style", "left", '344px'],
                ["style", "font-size", '11px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-264816188");
