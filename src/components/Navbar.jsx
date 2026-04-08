import React from "react";

function Navbar() {
  return (
    <div id="sticky-header" className="menu-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler">
              <i className="flaticon-layout"></i>
            </div>

            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="logo">
                  <a href="/">
                    <img
                      style={{ maxWidth: "150px" }}
                      src="https://suxnix-dev.myshopify.com/cdn/shop/files/logo.png?v=1735561122"
                      alt="suxnix dev"
                    />
                  </a>
                </div>

                <div className="navbar-wrap main-menu d-none d-xl-flex">
                  <ul className="navigation">
                    
                    <li className="level0 menu-item-has-children">
                      <a className="not-links section-link" role="link" style={{fontSize :"20px", color:"grey"}}>
                        Home
                      </a>
                      <div className="open-children-toggle"></div>

                      <ul className="sub-menu">
                        <li>
                          <a href="/" className="site-nav level-1">
                            <span>Home One</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://suxnix-home-2.myshopify.com/" className="site-nav level-1">
                            <span>Home Two</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://suxnix-home-3.myshopify.com/" className="site-nav level-1">
                            <span>Home Three</span>
                          </a>
                        </li>
                      </ul>

                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down"></span>
                      </div>
                    </li>

                    <li>
                      <a className="section-link" href="/#features" style={{fontSize :"20px", color:"grey"}}>Features</a>
                    </li>

                    <li>
                      <a className="section-link" href="/#product" style={{fontSize :"20px", color:"grey"}}>Product</a>
                    </li>

                    <li>
                      <a className="section-link" href="/#ingredient" style={{fontSize :"20px", color:"grey"}}>Ingredient</a>
                    </li>

                    <li>
                      <a className="section-link" href="/#pricing" style={{fontSize :"20px", color:"grey"}}>Pricing</a>
                    </li>

                    <li className="level0 menu-item-has-children">
                      <a className="not-links section-link" role="link" style={{fontSize :"20px", color:"grey"}}>
                        Shop
                      </a>

                      <div className="open-children-toggle"></div>

                      <ul className="sub-menu">
                        <li>
                          <a href="/collections/all" className="site-nav level-1">
                            <span>Our Shop</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/amino-energy-health-2kg-copy" className="site-nav level-1">
                            <span>Shop Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="/cart" className="site-nav level-1">
                            <span>Cart Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/account/login" className="site-nav level-1">
                            <span>Login Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/account/register" className="site-nav level-1">
                            <span>Register</span>
                          </a>
                        </li>
                      </ul>

                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down"></span>
                      </div>
                    </li>

                    <li className="level0 menu-item-has-children">
                      <a className="not-links section-link" role="link" style={{fontSize :"20px", color:"grey"}}>
                        News
                      </a>

                      <div className="open-children-toggle" ></div>

                      <ul className="sub-menu">
                        <li>
                          <a href="/blogs/news" className="site-nav level-1">
                            <span>Our Blog</span>
                          </a>
                        </li>
                        <li>
                          <a href="/blogs/news/adipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore" className="site-nav level-1">
                            <span>Blog Details</span>
                          </a>
                        </li>
                      </ul>

                      <div className="dropdown-btn">
                        <span className="fas fa-angle-down"></span>
                      </div>
                    </li>

                    <li>
                      <a className="section-link" href="/pages/contact" style={{fontSize :"20px", color:"grey"}}>Contacts</a>
                    </li>

                  </ul>
                </div>

                <div className="header-action d-none d-sm-block">
                  <ul>
                    <li className="header-shop-cart">
                      <a href="#" className="cart-count">
                        <i className="flaticon-shopping-cart"></i>
                        <span className="mini-cart-count">0</span>
                      </a>

                      <div className="header-mini-cart">
                        <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap cartminiwidget">
                          <li className="empty-cart-message">
                            Your cart is empty
                          </li>
                        </ul>

                        <p className="woocommerce-mini-cart__total">
                          <strong>Subtotal:</strong>
                          <span className="woocommerce-Price-amount">Tk 0.00</span>
                        </p>

                        <p className="checkout-link">
                          <a href="/cart" className="button wc-forward">View Cart</a>
                          <a href="/cart/checkout" className="button checkout wc-forward">Checkout</a>
                        </p>
                      </div>
                    </li>

                    <li className="header-search">
                      <a href="#"><i className="flaticon-search"></i></a>
                    </li>

                    <li className="offCanvas-btn d-none d-xl-block">
                      <a href="#" className="navSidebar-button">
                        <i className="flaticon-layout"></i>
                      </a>
                    </li>

                  </ul>
                </div>

              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );

}

export default Navbar;