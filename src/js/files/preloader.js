import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { TextPlugin } from "gsap/dist/TextPlugin.js";
import { _slideUp, _slideDown } from "./functions.js";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
const tl = gsap.timeline({ defaults: {opacity: 1, ease: 'power3.in', autoAlpha: 0 } });
tl.from('.preloader__subtitle svg > path', { stagger: .04})
const indexes = document.querySelectorAll('.preloader__subtitle svg > path')



//===================================================================Preloader persent logic=====================================================================================
const
	images = document.images,
	totalImgaesCount = images.length,
	videos = document.querySelectorAll('video'),
	totalVideosCuont = videos.length;
	