"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[2519],{34054:(e,l,i)=>{i.d(l,{Z:()=>a,q:()=>r});const a={ANIMATION_BUILDER:"ANIMATION_BUILDER",ARRAY:"ARRAY",BACKGROUND_COLOR:"BACKGROUND_COLOR",BUTTON_GROUP:"BUTTON_GROUP",CHECKBOX:"CHECKBOX",DYNAMIC_PHOTO:"DYNAMIC_PHOTO",ENUM_COLUMNS:"ENUM_COLUMNS",ENUM_CUSTOM:"ENUM_CUSTOM",ENUM_SIDE:"ENUM_SIDE",HEX_SLIDER:"HEX_SLIDER",HIDDEN:"HIDDEN",MARKDOWN:"MARKDOWN",MAP_LAT:"MAP_LAT",MAP_LNG:"MAP_LNG",MAX_ITEMS_SLIDER:"MAX_ITEMS_SLIDER",OBJECT:"OBJECT",SLUG:"SLUG",TABBED_FIELDS:"TABBED_FIELDS",TEXT_COLOR:"TEXT_COLOR",TEXT_LINK:"TEXT_LINK",TEXT_LINK_MODAL:"TEXT_LINK_MODAL",TEXT_MULTILINE:"TEXT_MULTILINE",TOGGLE_SWITCH:"TOGGLE_SWITCH",URL:"URL",YOUTUBE_EMBED_URL:"YOUTUBE_EMBED_URL",COLLAPSIBLE:"COLLAPSIBLE",EVENTS_TAB:"EVENTS_TAB",TEXT_LINE:"TEXT_LINE",TEXT_LINE_CONSTANT:"TEXT_LINE_CONSTANT",COW_EVENT_FORM:"COW_EVENT_FORM"},r={DESIGN:"DESIGN",CONTENT:"CONTENT",ADVANCED:"ADVANCED"}},__fusion__41:(e,l,i)=>{i.r(l),i.d(l,{Illustration:()=>T,default:()=>a.Q,schema:()=>o});var a=i(72522),r=i(34054);const d=["b2b","courier","driver","rider","corporate","shipper","carrier","merchants"].map((e=>({field:e,label:e[0].toUpperCase()+e.substring(1),required:!1,type:r.Z.CHECKBOX,defaultValue:!1}))),t={fields:[{label:"Content Container Settings",type:r.Z.COLLAPSIBLE,category:r.q.DESIGN,itemSchema:{fields:[{field:"removePaddingSides",fieldLabel:"Remove side padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingTop",fieldLabel:"Remove top padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"removePaddingBottom",fieldLabel:"Remove bottom padding",required:!1,type:r.Z.CHECKBOX,defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:r.Z.TOGGLE_SWITCH,defaultValue:!1},{field:"containerBackgroundColor",label:"Content background color",required:!1,type:r.Z.BACKGROUND_COLOR},{field:"containerBackgroundTransparent",label:"Transparent background",fieldLabel:"Check here to make grid container transparent",required:!1,type:r.Z.CHECKBOX,defaultValue:!0}]}},{label:"Block Container Settings",type:r.Z.COLLAPSIBLE,category:r.q.DESIGN,itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:r.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:r.Z.BUTTON_GROUP,options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text color",required:!1,type:r.Z.TEXT_COLOR},{field:"backgroundColor",label:"Background color",required:!1,type:r.Z.BACKGROUND_COLOR},{field:"backgroundImageLarge",label:"Background image large",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Background image medium",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Background image small",required:!1,type:r.Z.DYNAMIC_PHOTO,dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay hex color",required:!1,type:r.Z.HEX_SLIDER},{field:"backgroundPosition",label:"Background image position",required:!1,type:r.Z.ENUM_CUSTOM,options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:r.Z.OBJECT,itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video desktop URL - 1080p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Mp4",label:"Video tablet URL - 720p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Mp4",label:"Video mobile URL - 480p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl1080Webm",label:"Video desktop URL - 1080p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl720Webm",label:"Video tablet URL - 720p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl480Webm",label:"Video mobile URL - 480p - WEBM",required:!1,type:r.Z.TEXT_LINE},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:r.Z.TEXT_LINE}]}},{field:"height",label:"Block height",required:!1,type:r.Z.TABBED_FIELDS,itemSchema:{fields:[{field:"desktop",label:"Desktop",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE},{field:"tablet",label:"Tablet",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE},{field:"mobile",label:"Mobile",placeholder:"i.e. 200px, 2em, 2rem",disableCount:!0,required:!1,type:r.Z.TEXT_LINE}]}},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:r.Z.ENUM_CUSTOM,options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block anchor name",required:!1,type:r.Z.SLUG}]}},{label:"Rules Based Personalization (Logged-out User) Settings",type:r.Z.COLLAPSIBLE,category:r.q.ADVANCED,itemSchema:{fields:[{field:"visibleOn",label:"Visible for following user types",type:r.Z.OBJECT,required:!1,itemSchema:{fields:d}},{field:"hiddenOn",label:"Hidden for following user types",type:r.Z.OBJECT,required:!1,itemSchema:{fields:d}}]}}]},o={title:"Legal",fields:[{field:"body",label:"Body",required:!1,type:r.Z.MARKDOWN,category:r.q.CONTENT},...t.fields]};var E=i(33990);const T=e=>{let{width:l,height:i}=e;return(0,E.tZ)("img",{src:"https://terrablob.uberinternal.com/_gateway/prod/uber-static/chameleon-fusion/Legal.png",alt:"",width:l||"auto",height:i||"200px"})}}}]);