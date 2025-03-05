/*
@Author: Kristinita
@Date: 2023-12-07 10:46:45
@Last Modified by: Kristinita
@Last Modified time: 2025-02-28 19:01:04
*/
/*
[PATCH] Add “alt” attribute for hes-gallery image stub.
It’s required for Pa11y and WAVE web page accessibility tests:
https://github.com/demtario/hes-gallery/issues/13#issuecomment-1857782005

[NOTE] Best practice for hes-gallery here — isn’t use “img” stub without “src” attribute
(perhaps in the future Accessibility tools will react to it),
but to create “img” element when starting hes-gallery
*/
var kiraAddAltForImage;

//##############
// hes-gallery #
//##############
/*
[OVERVIEW] Light, dependency free responsive lightbox/gallery:
https://demtario.github.io/hes-gallery/demo/
https://github.com/demtario/hes-gallery

[OPTIONS] https://github.com/demtario/hes-gallery#global-options
*/
HesGallery.init({
  /*
  [INFO] Disable request to styles from hes-gallery script:
  https://github.com/demtario/hes-gallery/blob/b5cd99a14177bfa9eea50fe1110dc608cbca8365/src/hes-gallery.js#L76-L78

  Reasons:
  	1. “element.innerHTML +=” is bad for web performance:
  	https://stackoverflow.com/a/11515395/5951529
  	2. I can do a hes-gallery script and styles uploading parallel, not sequential.
  	This is a plus for a web-performance.
  	3. Non-critical styles are best loaded with Defer.js:
  	https://github.com/shinsenter/defer.js#Defer.css
  	4. My experience shows that unpkg works less stable than JSDelivr.
  	Site loading sometimes hangs due to slow unpkg.
  */
  hostedStyles: false,
  /*
  [INFO] “Create loop on gallery, you can go from last photo to first with one click”
  */
  wrapAround: true
});

kiraAddAltForImage = async (kiraNoAltImage) => {
  var kiraObjectNoAltImage;
  kiraObjectNoAltImage = (await waitForElm(kiraNoAltImage));
  if (kiraObjectNoAltImage.hasAttribute("alt")) {
    /* eslint-disable no-console --

    [INFO] I think it is acceptable to leave “console.error” in the console in this case
    so that the error can be tracked when the developers fix the problem
    */
    return console.error(`“alt” attribute already exists for #${kiraObjectNoAltImage.id} element!`);
  } 
    /* eslint-enable no-console */
    return kiraObjectNoAltImage.setAttribute("alt", "hes-gallery default image stub");
  
};

kiraAddAltForImage("#hg-pic");

//# sourceMappingURL=hes-gallery.js.map
