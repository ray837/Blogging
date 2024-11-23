 
import '../App.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import $ from 'jquery';
import Slider from 'react-slick';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import 'google-code-prettify/bin/prettify.min.js'; // Import the prettify library
import 'google-code-prettify/bin/prettify.min.css'
import { Card, CardContent, Typography, Grid, TextField, MenuItem } from '@mui/material';
import { dataprovider } from '../data';
const blogData =  dataprovider();

function Home() {

    const [filteredBlogs, setFilteredBlogs] = React.useState(blogData);
    const [filterKeyword, setFilterKeyword] = React.useState('');
    const [filterCategory, setFilterCategory] = React.useState('');
    const [filterField, setFilterField] = React.useState('title'); // Default filter field
  
    const handleFilterKeywordChange = (event) => {
      const value = event.target.value.toLowerCase();
      setFilterKeyword(value);
      applyFilters(value, filterCategory.toLowerCase(), filterField);
    };
  
    const handleFilterCategoryChange = (event) => {
      const value = event.target.value.toLowerCase();
      setFilterCategory(value);
      applyFilters(filterKeyword.toLowerCase(), value, filterField);
    };
  
    const handleFilterFieldChange = (event) => {
      const value = event.target.value;
      setFilterField(value);
      applyFilters(filterKeyword.toLowerCase(), filterCategory.toLowerCase(), value);
    };
  
    const applyFilters = (keywordFilter, categoryFilter, fieldFilter) => {
      const filteredData = blogData.filter((blog) =>
        blog[fieldFilter].toLowerCase().includes(keywordFilter) &&
        blog.category.toLowerCase().includes(categoryFilter)
      );
      setFilteredBlogs(filteredData);
    };
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
   <div id="features">
    <div id="first_feature">
<div id="image_holder">
    
</div>
<h4>Garbage Collector<span>NEW</span></h4>
<p>How Garbage collectors revolutionised memory mangement</p>
    </div>
    <div id="second_feature">
<h2>Think</h2>
<h3>Never stop <br /></h3>
<h2>Learning!</h2>
<p>A mind once stretched by a new idea never returns to its original dimensions.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Oliver Wendell</p>
    </div>
    <div id="third_feature">
    <div id="image_holder2">
    
    </div>
    <h4>BlueScreen Death<span>NEW</span></h4>
    <p>How a simple programming mistake caused system outage accross globe.</p>
    </div>

</div>
<a href="#0" id="float" class="header__search-trigger'">
 
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
</svg>
</a>
    <div id="top" class="s-wrap site-wrapper">
 
 
{/* <Sidebar></Sidebar> */}
        <div class="s-content">
        <div style={{ marginBottom: 16 }}>
            
        <TextField
          select
          label="Filter by field"
          variant="outlined"
          value={filterField}
          onChange={handleFilterFieldChange}
          style={{ minWidth: 150 }}
        >
          <MenuItem value="id">ID</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="content">Content</MenuItem>
          <MenuItem value="excerpt">Excerpt</MenuItem>
          <MenuItem value="category">Category</MenuItem>
        </TextField>
        
         <TextField
          required
          id="filled-required"
          label={`Filter by ${filterField}`}
          value={filterKeyword}
          defaultValue="Hello World"
          onChange={handleFilterKeywordChange}
          variant="filled"
          style={{marginLeft:"10px",fontSize:"30px"}}
          
        />

      </div>

      
            <div class="masonry-wrap">

                <div class="masonry">
    
                    <div class="grid-sizer"></div>
                    
                    <article class="masonry__brick entry format-quote animate-this">
                    
                    {/* <div class="entry__thumb">
                        <blockquote>
                            <p>Practice makes man perfect</p>
    
                            <cite>Om gawde</cite>
                        </blockquote>
                    </div>    */}
                    <div class="headline set3"><div href="#" draggable="false" rel="noopener" aria-label="work" class="head-wrap">
                        <div class="head-title">Up<span class="dom">co</span>min<span class="dom">g</span> Next</div>
                        </div>
                        <div class="head-desc left">Fresh entry – A selected<br/>work from the latest <br/>digital releases.</div>
                        {/* <div class="head-caption">
                            <div class="item-title cap">Tip!<span class="text-span-2"></span></div>
                        <div class="item-desc cap">Click on the image to explore</div>
                    </div> */}
                    </div>
         
                </article>  
            {filteredBlogs.map((blog) => (<article class="masonry__brick entry format-standard animate-this">
                            
                            <div class="entry__thumb">
                                <a  href={`https://thinktanktribe.netlify.app/author/${blog.author.split(' ')[0]}%20${blog.author.split(' ')[1]}/${blog.id}`}
  class="entry__thumb-link">
                                <div
      style={{
        backgroundImage: `url(${blog.image})`,
        backgroundSize: 'cover',  
        // backgroundPosition: 'center',  
        width: '90%',  
        height: '200px', 
      }}
    />
                                    {/* <img src="https://barkigo.com/history7.jpg" 
                                            srcset="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x" alt="" /> */}
                                </a>
                            </div>
            
                            <div class="entry__text">
                                <div class="entry__header">
        
                                    <h2 class="entry__title">  <a href={`/author/${blog.author}/${blog.id}`} style={{color:"black" }}>{blog.title}</a></h2>
                                    <div class="entry__meta">
                                        <span class="entry__meta-cat">
                                            <Link href={`/category/${blog.category}`}>Programming language</Link> 
                                            <Link href={`/category/${blog.category}`}>{blog.category}</Link>
                                        </span>
                                        <span class="entry__meta-date">
                                            <a  href={`/${blog.author}/${blog.id}`}>{blog.date}</a>
                                        </span>
                                        <span class="entry__meta-date">
                                        <a href={`/author-search/${encodeURIComponent(blog.author)}`}>{blog.author}</a>
                                        </span>
                                    </div>
                                    
                                </div>
                                <div class="entry__excerpt">
                                    <p>
                                  {blog.excerpt} </p>
                                </div>
                            </div>
            
                        </article>) ) }
                        <article class="masonry__brick entry format-quote animate-this">
                        
                    <div class="entry__thumb">
                        <blockquote>
                            <p>Where there is a will there is a way</p>
    
                            <cite>Rayid</cite>
                        </blockquote>
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
                                <h2>I Love ReactJS</h2>
                                <cite>
                                    
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
                 
                </div>
            </div>

            <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"></a>
            </div>
        </footer>

    </div> 
 
 
 
     </>
  );
}

export default Home;