"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[454],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./components/Avatar/Avatar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarImage:()=>Avatar_stories_AvatarImage,AvatarLarge:()=>AvatarLarge,AvatarMedium:()=>AvatarMedium,AvatarSmall:()=>AvatarSmall,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),UserIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/UserIcon.js"),__jsx=react.createElement,AvatarIcon=function AvatarIcon(){return __jsx(UserIcon.Z,{className:"absolute w-1/2 h-1/2"})};AvatarIcon.displayName="AvatarIcon";const Avatar_AvatarIcon=AvatarIcon;var next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),AvatarImage_jsx=react.createElement,AvatarImage=function AvatarImage(_ref){var src=_ref.src,_ref$alt=_ref.alt,alt=void 0===_ref$alt?"":_ref$alt;return AvatarImage_jsx("div",null,AvatarImage_jsx(next_image.Z,{src,alt,className:"rounded-full",width:100,height:100}))};AvatarImage.displayName="AvatarImage";const Avatar_AvatarImage=AvatarImage;try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/AvatarImage.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"components/Avatar/AvatarImage.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["size","className","image","alt"],Avatar_jsx=react.createElement,avatarSizeMap={xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-9 h-9"},Avatar=function Avatar(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"xs":_ref$size,className=_ref.className,image=_ref.image,alt=_ref.alt,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return Avatar_jsx("div",(0,esm_extends.Z)({className:classnames_default()("relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",avatarSizeMap[size],className)},rest),image?Avatar_jsx(Avatar_AvatarImage,{src:image,alt}):Avatar_jsx(Avatar_AvatarIcon,null))};Avatar.displayName="Avatar";const Avatar_Avatar=Avatar;try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}const Avatar_stories={title:"Atoms/Avatar",component:Avatar_Avatar,argTypes:{className:{type:"string"},size:{type:"string"}}};var Primary={args:{}},AvatarSmall={args:{size:"sm"}},AvatarMedium={args:{size:"md"}},AvatarLarge={args:{size:"lg"}},Avatar_stories_AvatarImage={args:{size:"lg",image:"https://placehold.co/400x400.png"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}},AvatarSmall.parameters={...AvatarSmall.parameters,docs:{...AvatarSmall.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "sm"\n  }\n}',...AvatarSmall.parameters?.docs?.source}}},AvatarMedium.parameters={...AvatarMedium.parameters,docs:{...AvatarMedium.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "md"\n  }\n}',...AvatarMedium.parameters?.docs?.source}}},AvatarLarge.parameters={...AvatarLarge.parameters,docs:{...AvatarLarge.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  }\n}',...AvatarLarge.parameters?.docs?.source}}},Avatar_stories_AvatarImage.parameters={...Avatar_stories_AvatarImage.parameters,docs:{...Avatar_stories_AvatarImage.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: "lg",\n    image: "https://placehold.co/400x400.png"\n  }\n}',...Avatar_stories_AvatarImage.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","AvatarSmall","AvatarMedium","AvatarLarge","AvatarImage"]}}]);