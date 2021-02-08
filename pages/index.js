import Head from 'next/head'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    initEffects()
  })

  function initEffects () {
    // init feather icons
    feather.replace()

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    // page scroll
    $('a.page-scroll').bind('click', function (event) {
      const $anchor = $(this)
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 50
          },
          1000
        )
      event.preventDefault()
    })

    // toggle scroll menu
    $(window).scroll(function () {
      const scroll = $(window).scrollTop()
      // adjust scroll to top
      if (scroll >= 600) {
        $('.scroll-top').addClass('active')
      } else {
        $('.scroll-top').removeClass('active')
      }
      return false
    })

    // open / close video section
    $('.show-video').click(function () {
      $('.video-wrapper').addClass('show')
    })

    $('.video-close').click(function () {
      $('.video-wrapper').removeClass('show')
    })

    // slick slider
    $('.slick-users').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false
    })

    // scroll top top
    $('.scroll-top').click(function () {
      $('html, body').stop().animate(
        {
          scrollTop: 0
        },
        1000
      )
    })

    /** Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
      $('.switcher-wrap').toggleClass('active')
    })
    $('.color-switcher ul li').click(function () {
      const color = $(this).attr('data-color')
      $('#theme-color').attr('href', 'css/' + color + '.css')
      $('.color-switcher ul li').removeClass('active')
      $(this).addClass('active')
    })
  }

  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link href='https://rsms.me/inter/inter-ui.css' rel='stylesheet' />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css'
        />
      </Head>
      <section className='py-5 py-md-7' id='home'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 my-md-auto mb-5 mb-md-0 text-center text-md-left'>
              <span className='text-uppercase text-muted small-xl'>Roll</span>
              <h1 className='display-4 mt-2 mb-5'>
                Minimal notes and tasks 
              </h1>
              <a
                href='#'
                className='btn btn-primary d-inline-flex flex-row align-items-center'
              >
                <em
                  data-feather='play'
                  width='20'
                  height='20'
                  className='mr-2'
                />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='py-6' id='features'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 mx-auto'>
              <h2 className='dot-circle'>Features</h2>
              <div className='row mt-6'>
                <div className='col-sm-6 mb-5'>
                  <div className='media'>
                    <div className='icon-box mt-0 ml-0'>
                      <div className='icon-box-inner small-xs text-primary'>
                        <span data-feather='moon' width='30' height='30' />
                      </div>
                    </div>
                    <div className='media-body'>
                      <h5 className='mt-0'>Dark Mode</h5>
                      <span className='text-muted'>
                        We know that the best ideas come when you are half
                        asleep so this is kind off important
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-5'>
                  <div className='media'>
                    <div className='icon-box mt-0 ml-0'>
                      <div className='icon-box-inner small-xs text-primary'>
                        <span data-feather='award' width='30' height='30' />
                      </div>
                    </div>
                    <div className='media-body'>
                      <h5 className='mt-0'>Easy Task Tracking</h5>
                      <span className='text-muted'>
                        Tasks and Notes sorted by Dates make it easier to manage
                        and Labels make it easier to track the status of the
                        task/note
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-5'>
                  <div className='media'>
                    <div className='icon-box mt-0 ml-0'>
                      <div className='icon-box-inner small-xs text-primary'>
                        <span data-feather='users' width='30' height='30' />
                      </div>
                    </div>
                    <div className='media-body'>
                      <h5 className='mt-0'>Teams</h5>
                      <span className='text-muted'>
                        Collaboration is an important part for a lot of research
                        and note taking, so we aren't leaving you short with
                        this either.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-5'>
                  <div className='media'>
                    <div className='icon-box mt-0 ml-0'>
                      <div className='icon-box-inner small-xs text-primary'>
                        <span data-feather='command' width='30' height='30' />
                      </div>
                    </div>
                    <div className='media-body'>
                      <h5 className='mt-0'>Global Power Menu</h5>
                      <span className='text-muted'>
                        A power menu to help you browse through the app without
                        leaving the keyboard
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mb-5'>
                  <div className='media'>
                    <div className='icon-box mt-0 ml-0'>
                      <div className='icon-box-inner small-xs text-primary'>
                        <span
                          data-feather='headphones'
                          width='30'
                          height='30'
                        />
                      </div>
                    </div>
                    <div className='media-body'>
                      <h5 className='mt-0'>24/7 supports</h5>
                      <span className='text-muted'>
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imper per tem por legere me doming.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-6 mx-auto text-center'>
              <h5 className='mb-4'>Have questions?</h5>
              <a href='#contact' className='btn btn-primary page-scroll'>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className=' pt-6' id='pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 mx-auto'>
              <h2 className='dot-circle'>Pricing.</h2>
              <p className='text-muted lead'>
                No hidden fees. 100% refund guarantee.
              </p>
              <div className='row pricing-table mt-5'>
                <div className='col-sm-5'>
                  <ul className='list-unstyled pricing-list'>
                    <li>
                      <h5>One plan</h5>
                    </li>
                    <li>
                      <h5>Unlimited access</h5>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-6 ml-auto bg-primary'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <p className='h1 text-white'>$2</p>
                      <p className='text-light'>Per User, Per Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' mt-7' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 mx-auto'>
              <h2 className='dot-circle'>Need help?</h2>
              <p className='text-muted lead'>
                We'd love to answer your questions.
              </p>
              <div className='row mt-5 card-contacts'>
                <div className='col-md-12 mb-3'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <div className='icon-box'>
                        <div className='icon-box-inner small-xs text-primary'>
                          <span data-feather='inbox' width='30' height='30' />
                        </div>
                      </div>
                      <h5>Send us an email</h5>
                      <p className='text-muted small-xl'>
                        We usually reply within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row mt-5">
                <div className="col-md-6 mb-5">
                  <h6>Can I try Roll for free?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>Do you have hidden fees?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>What are the payment methods you accept?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How often do you release updates?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>What is your refund policy?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>How can I contact you?</h6>
                  <p className="text-muted">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imper per tem por legere me doming.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <footer className='mt-5 mb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto text-center text-md-left'>
              &copy;2021 BarelyHuman Dev Studio
            </div>
            <div className='col-md-4 text-center'>
              {/* <ul className="list-inline social social-white-alt social-rounded social-sm mb-0">
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul> */}
            </div>
            <div className='col-md-3 text-center text-md-right mb-0'>
              <ul className='list-inline'>
                <li className='list-inline-item'>
                  <a href='#'>Privacy</a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>Terms</a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>Affiliates</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12 text-muted text-center small'>
              &copy; 2021 BarelyHuman Dev Studio
            </div>
          </div>
        </div>
      </footer>

      <section className='video-wrapper'>
        <div className='video-close' id='video-close'>
          <em data-feather='x' className='icon' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto my-auto'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe
                  className='embed-responsive-item allowfullscreen'
                  src='https://www.youtube.com/embed/MGsalg2f9js?rel=0&amp;controls=0&amp;showinfo=0'
                  allowFullScreen=''
                  frameBorder='0'
                  height='415'
                  width='100%'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='scroll-top'>
        <i className='fa fa-angle-up' aria-hidden='true' />
      </div>

      <script src='https://code.jquery.com/jquery-3.2.1.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' />
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.5.0/feather.min.js' />
      <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js' />
    </>
  )
}
