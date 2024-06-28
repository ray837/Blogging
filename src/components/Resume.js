import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
export default function Resume(){
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

        //add post 
         
        const trigger = $('#float');
    
        trigger.on('click', (e) => {
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
 return(<>
 <Sidebar></Sidebar>
 <div class="container" style={{marginTop:" 10px",marginLeft:"320px"}}>
    <div class="left_Side">
        <div class="profileText">
            <div class="imgBx">
              <div id="photo"> </div>
            </div>
            <br/>
            <h2>Ekaterina Antonova <br/><span>Web Developer</span> </h2>
        </div>

        <div class="contactInfo">
            <h3 class="title">Contact Info</h3>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text">+1 234 567 89</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="text">jon_doe@example.com</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                    <span class="text">www.mywebsite.com</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                    <span class="text">www.linkedin/me</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text">Bangalore, India</span>
                </li>
            </ul>
        </div>
        <div class="contactInfo education">
            <h3 class="title">Education</h3>
            <ul>
                <li>
                    <h5>2010 - 2013</h5>
                    <h4>Bachelor Degree in Information Science</h4>
                    <h4>New Horizon College Of Engineerinf</h4>
                </li>
                <li>
                    <h5>2007 - 2013</h5>
                    <h4>Bachelor Degree Computer Science</h4>
                    <h4>University Name</h4>
                </li>
                <li>
                    <h5>1997 - 2007</h5>
                    <h4>Matriculation </h4>
                    <h4>University Name</h4>
                </li>
            </ul>
        </div>
        <div class="contactInfo language">
            <h3 class="title">Languages</h3>
            <ul>
                <li>
                    <span class="text">English</span>
                    <span class="percent">
                        <div class="englishw50" > </div>
                    </span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="text">Russian</span>
                    <span class="percent">
                        <div class="russianw90"></div>
                    </span>
                </li>
            </ul>
            <ul>
                <li>
                    <span class="text">French</span>
                    <span class="percent">
                        <div class="frenchw30"></div>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <div class="right_Side">
        <div class="about">
            <h2 class="title2">Profile</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br /> <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="about">
            <h2 class="title2">Experience</h2>
            <div class="box">
                <div class="year_company">
                    <h5>2020 - Present</h5>
                    <h5>Company Name</h5>
                </div>
                <div class="text">
                    <h4>Senior UX Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="box">
                <div class="year_company">
                    <h5>2018 - 2020</h5>
                    <h5>Company Name</h5>
                </div>
                <div class="text">
                    <h4>UX Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div class="box">
                <div class="year_company">
                    <h5>2016 - 2018</h5>
                    <h5>Company Name</h5>
                </div>
                <div class="text">
                    <h4>Junior UX Developer</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
        <div class="about skills">
            <h2 class="title2">Professionals skills</h2>
            <div class="box">
                <h4>HTML</h4>
                <div class="percent">
                    <div class="htmlws30"></div>
                </div>
            </div>
            <div class="box">
                <h4>CSS</h4>
                <div class="percent">
                    <div class="cssws45"></div>
                </div>
            </div>
            <div class="box">
                <h4>JavaScript</h4>
                <div class="percent">
                    <div class="jsws70"></div>
                </div>
            </div>
            <div class="box">
                <h4>Photoshop</h4>
                <div class="percent">
                    <div class="phws40"></div>
                </div>
            </div>
            <div class="box">
                <h4>Illustrator</h4>
                <div class="percent">
                    <div class="ilws60"></div>
                </div>
            </div>
            <div class="box">
                <h4>Adobe XD</h4>
                <div class="percent">
                    <div class="adw70"></div>
                </div>
            </div>
        </div>
        <div class="about interest">
            <h2 class="title2">Interests</h2>
            <ul>
                <li><i class="fa fa-book" aria-hidden="true"></i> Reading</li>
                <li><i class="fa fa-gamepad" aria-hidden="true"></i> Gaming</li>
                <li><i class="fa fa-cutlery" aria-hidden="true"></i> Cooking</li>
                <li><i class="fa fa-microphone" aria-hidden="true"></i> Singing</li>
            </ul>
        </div>


    </div>
</div>
 </>)

}