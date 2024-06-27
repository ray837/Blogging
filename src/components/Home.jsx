 
import '../App.css';
import $ from 'jquery';
import Slider from 'react-slick';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import 'google-code-prettify/bin/prettify.min.js'; // Import the prettify library
import 'google-code-prettify/bin/prettify.min.css'
function Home() {

    useEffect(() => {
        // Add the User Agent to the <html>
        document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    
        // Preloader
        const handleLoad = () => {
          $('html').removeClass('ss-preload').addClass('ss-loaded');
          $('#loader').fadeOut('slow', () => {
            $('#preloader').delay(300).fadeOut('slow');
          });
        };
    
        $('html').addClass('ss-preload');
        window.addEventListener('load', handleLoad);
    
        // Search
        const searchWrap = $('.header__search');
        const searchField = searchWrap.find('.search-field');
        const closeSearch = searchWrap.find('.header__search-close');
        const searchTrigger = $('.header__search-trigger');
        const siteBody = $('body');
    
        searchTrigger.on('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          siteBody.addClass('search-is-visible');
          setTimeout(() => {
            searchField.focus();
          }, 100);
        });
    
        closeSearch.on('click', (e) => {
          e.stopPropagation();
          siteBody.removeClass('search-is-visible');
          setTimeout(() => {
            searchField.blur();
          }, 100);
        });
    
        searchWrap.on('click', (e) => {
          if (!$(e.target).is('.search-field')) {
            closeSearch.trigger('click');
          }
        });
    
        searchField.on('click', (e) => {
          e.stopPropagation();
        });
    
        searchField.attr({ placeholder: 'Type Keywords', autocomplete: 'off' });
    
        // Menu
        const menuToggle = $('.header__menu-toggle');
        menuToggle.on('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          menuToggle.toggleClass('is-clicked');
          siteBody.toggleClass('nav-wrap-is-visible');
        });
    
        $('.header__nav .has-children').children('a').on('click', function (e) {
          e.preventDefault();
          $(this)
            .toggleClass('sub-menu-is-open')
            .next('ul')
            .slideToggle(200)
            .end()
            .parent('.has-children')
            .siblings('.has-children')
            .children('a')
            .removeClass('sub-menu-is-open')
            .next('ul')
            .slideUp(200);
        });
    
        // Masonry
        const containerBricks = document.querySelector('.masonry');
        if (containerBricks) {
          const msnry = new Masonry(containerBricks, {
            itemSelector: '.masonry__brick',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: true,
          });
    
          imagesLoaded(containerBricks).on('progress', () => {
            msnry.layout();
          });
        }
    
        // Animate Bricks
        const animateEl = $('.animate-this');
        const handleResize = () => {
          animateEl.removeClass('animate-this animated');
        };
        window.addEventListener('resize', handleResize);
    
        setTimeout(() => {
          animateEl.each((index, el) => {
            setTimeout(() => {
              $(el).addClass('animated');
            }, index * 200);
          });
        }, 300);
    
        // Back to Top
        const goTopButton = $('.go-top');
        const pxShow = 500;
        const handleScroll = () => {
          if ($(window).scrollTop() >= pxShow) {
            if (!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible');
          } else {
            goTopButton.removeClass('link-is-visible');
          }
        };
        $(window).on('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('load', handleLoad);
          window.removeEventListener('resize', handleResize);
          $(window).off('scroll', handleScroll);
        };
      }, []);
    
      const slickSettings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'linear',
      };
  return (
     <>
   

{/*     
    <div id="preloader">
        <div id="loader" class="dots-fade">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> */}

    <div id="top" class="s-wrap site-wrapper">
 
        <header class="s-header">

            <div class="header__top">
                <div class="header__logo">
                    <a class="site-logo" href="index.html">
                        <img src="images/logo.svg" alt="Homepage"/>
                    </a>
                </div>

                <div class="header__search">
    
                    <form role="search" method="get" class="header__search-form" action="#">
                        <label>
                            <span class="hide-content">Search for:</span>
                            <input type="search" class="header__search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autocomplete="off" />
                        </label>
                        <input type="submit" class="header__search-submit" value="Search" />
                    </form>
        
                    <a href="#0" title="Close Search" class="header__search-close">Close</a>
        
                </div>   

           
                <a href="#0" class="header__search-trigger"></a>
                <a href="#0" class="header__menu-toggle"><span>Menu</span></a>

            </div>  

            <nav class="header__nav-wrap">

                <ul class="header__nav">
                    <li class="current"><a href="index.html" title="">Home</a></li>
                    <li class="has-children">
                        <a href="#0" title="">Categories</a>
                        <ul class="sub-menu">
                        <li><a href="category">Lifestyle</a></li>
                        <li><a href="category">Health</a></li>
                        <li><a href="category">Family</a></li>
                        <li><a href="category">Management</a></li>
                        <li><a href="category">Travel</a></li>
                        <li><a href="category">Work</a></li>
                        </ul>
                    </li>
                    <li class="has-children">
                        <a href="#0" title="">Blog Posts</a>
                        <ul class="sub-menu">
                        <li><a href="single-video.html">Video Post</a></li>
                        <li><a href="single-audio.html">Audio Post</a></li>
                        <li><a href="single-gallery.html">Gallery Post</a></li>
                        <li><a href="single-standard.html">Standard Post</a></li>
                        </ul>
                    </li>
                    <li><a href="styles.html" title="">Styles</a></li>
                    <li><a href="page-about.html" title="">About</a></li>
                    <li><a href="page-contact.html" title="">Contact</a></li>
                </ul> 

                <ul class="header__social">
                    <li class="ss-facebook">
                        <a href="https://facebook.com/">
                            <span class="screen-reader-text">Facebook</span>
                        </a>
                    </li>
                    <li class="ss-twitter">
                        <a href="#0">
                            <span class="screen-reader-text">Twitter</span>
                        </a>
                    </li>
                    <li class="ss-dribbble">
                        <a href="#0">
                            <span class="screen-reader-text">Dribbble</span>
                        </a>
                    </li>
                    <li class="ss-pinterest">
                        <a href="#0">
                            <span class="screen-reader-text">Behance</span>
                        </a>
                    </li>
                </ul>

            </nav> 

            

        </header> 

        <div class="s-content">
         
            <div class="masonry-wrap">

                <div class="masonry">
    
                    <div class="grid-sizer"></div>
                    
                    <article class="masonry__brick entry format-standard animate-this">
                        
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/woodcraft-600.jpg" 
                                        srcset="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x" alt="" />
                            </a>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
    
                                <h2 class="entry__title">  <a href="single-standard.html" style={{color:"black" }}>Latest Java update</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Programming language</a> 
                                        <a href="category">Technology</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 29, 2024</a>
                                    </span>
                                </div>
                                
                            </div>
                            <div class="entry__excerpt">
                                <p>
                               public static void main is not required in latest update of java , now you can use main function directly..
                                </p>
                            </div>
                        </div>
        
                    </article> 
    
                    <article class="masonry__brick entry format-quote animate-this">
                            
                        <div class="entry__thumb">
                            <blockquote>
                                <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
    
                                <cite>Dieter Rams</cite>
                            </blockquote>
                        </div>   
        
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
                            
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/tulips-600.jpg" 
                                        srcset="images/thumbs/masonry/tulips-600.jpg 1x, images/thumbs/masonry/tulips-1200.jpg 2x" alt="" />
                            </a>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">10 Interesting Facts About Caffeine.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Health</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 28, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
        
                    </article>  
                    
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/dew-600.jpg" 
                                        srcset="images/thumbs/masonry/dew-600.jpg 1x, images/thumbs/masonry/dew-1200.jpg 2x" alt="" />
                            </a>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">Health Benefits Of Morning Dew.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Lifestyle</a>
                                        <a href="category">Health</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 28, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
        
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                            <div class="entry__thumb">
                                <a href="single-standard.html" class="entry__thumb-link">
                                    <img src="images/thumbs/masonry/rucksack-600.jpg" 
                                            srcset="images/thumbs/masonry/rucksack-600.jpg 1x, images/thumbs/masonry/rucksack-1200.jpg 2x" alt="" />
                                </a>
                            </div>
            
                            <div class="entry__text">
                                <div class="entry__header">
                                    
                                    <h2 class="entry__title"><a href="single-standard.html">The Art Of Visual Storytelling.</a></h2>
                                    
                                    <div class="entry__meta">
                                        <span class="entry__meta-cat">
                                            <a href="category">Lifestyle</a>
                                            <a href="category">Work</a>
                                        </span>
                                        <span class="entry__meta-date">
                                            <a href="single-standard.html">Apr 26, 2019</a>
                                        </span>
                                    </div>
                                </div>
                                <div class="entry__excerpt">
                                    <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                    </p>
                                </div>
                            </div>
            
                        </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/jump-600.jpg" 
                                        srcset="images/thumbs/masonry/jump-600.jpg 1x, images/thumbs/masonry/jump-1200.jpg 2x" alt="" />
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                
                                <h2 class="entry__title"><a href="single-standard.html">Create Meaningful Family Moments.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Family</a>
                                        <a href="category">Relationship</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 26, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article> 
    
                    <article class="masonry__brick entry format-audio animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-audio.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/guitarist-600.jpg" 
                                     srcset="images/thumbs/masonry/guitarist-600.jpg 1x, images/thumbs/masonry/guitarist-1200.jpg 2x" alt="" />
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-audio.html">What Your Music Preference Says About You and Your Personality.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Lifestyle</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/beetle-600.jpg" 
                                        srcset="images/thumbs/masonry/beetle-600.jpg 1x, images/thumbs/masonry/beetle-1200.jpg 2x" alt="" />
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">Throwback To The Good Old Days.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Lifestyle</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article>  
    
                    <article class="masonry__brick entry format-video animate-this">
                            
                        <div class="entry__thumb video-image">
                            <a href="https://player.vimeo.com/video/117310401?color=339989&title=0&byline=0&portrait=0" data-lity class="entry__thumb-link">
                                <img src="images/thumbs/masonry/cookies-600.jpg" 
                                     srcset="images/thumbs/masonry/cookies-600.jpg 1x, images/thumbs/masonry/cookies-1200.jpg 2x" alt="" />
                            </a>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-video.html">No Sugar Oatmeal Cookies.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Lifestyle</a>
                                        <a href="category">Health</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
        
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/lamp-600.jpg" 
                                        srcset="images/thumbs/masonry/lamp-600.jpg 1x, images/thumbs/masonry/lamp-1200.jpg 2x" alt=""/>
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">Another Standard Format Post.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Design</a>
                                        <a href="category">Photography</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 24, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article>  
    
                    <article class="masonry__brick entry format-link animate-this">
                        
                        <div class="entry__thumb">
                            <div class="link-wrap">
                                <h2>Powerful web & Wordpress hosting. Guaranteed. Starting at $2.59/mo!</h2>
                                <cite>
                                    <a target="_blank" href="https://www.dreamhost.com/r.cgi?287326">https://www.dreamhost.com</a>
                                </cite>
                            </div>
                        </div>
                        
                    </article>  
    
                    <article class="masonry__brick entry format-gallery animate-this">
                            
                        <div class="entry__thumb slider">
                            <div class="slider__slides">
                                <div class="slider__slide">
                                    <img src="images/thumbs/masonry/gallery/slide-1-600.jpg" 
                                         srcset="images/thumbs/masonry/gallery/slide-1-600.jpg 1x, images/thumbs/masonry/gallery/slide-1-1200.jpg 2x" alt="" /> 
                                </div>
                                <div class="slider__slide">
                                    <img src="images/thumbs/masonry/gallery/slide-2-600.jpg" 
                                         srcset="images/thumbs/masonry/gallery/slide-2-600.jpg 1x, images/thumbs/masonry/gallery/slide-2-1200.jpg 2x" alt="" / > 
                                </div>
                                <div class="slider__slide">
                                    <img src="images/thumbs/masonry/gallery/slide-3-600.jpg" 
                                         srcset="images/thumbs/masonry/gallery/slide-3-600.jpg 1x, images/thumbs/masonry/gallery/slide-3-1200.jpg 2x" alt="" />  
                                </div>
                            </div>
                        </div>
        
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-gallery.html">The Best Tropical Leaves Images.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Vacation</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
        
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/walk-600.jpg" 
                                        srcset="images/thumbs/masonry/walk-600.jpg 1x, images/thumbs/masonry/walk-1200.jpg 2x" alt="" />
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">Using Repetition and Patterns in Photography.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Work</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article>  
    
                    <article class="masonry__brick entry format-standard animate-this">
    
                        <div class="entry__thumb">
                            <a href="single-standard.html" class="entry__thumb-link">
                                <img src="images/thumbs/masonry/real-600.jpg" 
                                        srcset="images/thumbs/masonry/real-600.jpg 1x, images/thumbs/masonry/real-1200.jpg 2x" alt="" />
                            </a>
                        </div>
    
                        <div class="entry__text">
                            <div class="entry__header">
                                <h2 class="entry__title"><a href="single-standard.html">How We Live Is What Makes Us Real.</a></h2>
                                <div class="entry__meta">
                                    <span class="entry__meta-cat">
                                        <a href="category">Travel</a>
                                        <a href="category">Vacation</a>
                                    </span>
                                    <span class="entry__meta-date">
                                        <a href="single-standard.html">Apr 23, 2019</a>
                                    </span>
                                </div>
                            </div>
                            <div class="entry__excerpt">
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
                                </p>
                            </div>
                        </div>
    
                    </article> 
    
                </div> 

            </div> 

            <div class="row">
                <div class="column large-full">
                    <nav class="pgn">
                        <ul>
                            <li><a class="pgn__prev" href="#0">Prev</a></li>
                            <li><a class="pgn__num" href="#0">1</a></li>
                            <li><span class="pgn__num current">2</span></li>
                            <li><a class="pgn__num" href="#0">3</a></li>
                            <li><a class="pgn__num" href="#0">4</a></li>
                            <li><a class="pgn__num" href="#0">5</a></li>
                            <li><span class="pgn__num dots">…</span></li>
                            <li><a class="pgn__num" href="#0">8</a></li>
                            <li><a class="pgn__next" href="#0">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>  


    
        <footer class="s-footer">
            <div class="row">
                <div class="column large-full footer__content">
                    <div class="footer__copyright">
                        <span>© Copyright Typerite 2019</span> 
                        <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                    </div>
                </div>
            </div>

            <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"></a>
            </div>
        </footer>

    </div> 
 
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

 
     </>
  );
}

export default Home;