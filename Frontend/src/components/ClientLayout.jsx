import React from 'react'
import { createContext, useState } from "react"

const ClientLayout = () => {
  return (
    <>
  <div className="sidebar">
      <div className="logo">
          <h1 className="text-2xl">
            Seat Reservations
          </h1>
      </div>
      <div className="nav-menu">
        <a href="#" className="nav-item active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-regular fa-calendar"></i>
          <span>Reserve Seats</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-regular fa-bookmark"></i>
          <span>Reservations</span>
        </a>
        <a href="#" className="nav-item">
          <i className="fa-regular fa-user"></i>
          <span>Logout</span>
        </a>
       
      </div>

    </div>
{/* <!-- Main Content --> */}
    <div className="main-content">
      {/* <!-- Header --> */}
      <div className="header">
        <div className="welcome-section">
          <p className="greeting">Hello, <span className="text-xl font-bold">Jhon Doe</span></p>
          <h1 className="welcome-title">Reserve Your Seat</h1>
        </div>
        <div className="header-right">
          <div className="notification-bell">
            <i className="fas fa-bell"></i>
            <div className="notification-indicator"></div>
          </div>
          <div className="user-profile">
            <img
              src="./img/avatar.png"
              className="profile-pic"
            />
          </div>
          {/* <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Find transactions..." />
          </div> */}
        </div>
      </div>
      {/* <!-- Dashboard Container --> */}
      <div className="dashboard-container">
        {/* <!-- Main Dashboard Content --> */}
        <div className="dashboard-main w-auto">
          
          <div className="transfer-cards">
  
            <div className="transfer-card">
                <div className="card-icon">
                <i className="fas fa-university"></i>
                </div>
                <p className="card-title">Department</p>
                <select className="dropdown">
                <option value="">Select Department</option>
                <option value="hr">Human Resources</option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                </select>
            </div>

            
            <div className="transfer-card">
                <div className="card-icon">
                <i className="fas fa-building"></i>
                </div>
                <p className="card-title">Room Number</p>
                <select className="dropdown">
                <option value="">Select Room</option>
                <option value="101">Room 01</option>
                <option value="202">Room 02</option>
                <option value="303">Room 03</option>
                <option value="404">Room 04</option>
                </select>
            </div>

            
            <div className="transfer-card">
                <div className="card-icon">
                <i className="fas fa-calendar-days"></i>
                </div>
                <p className="card-title">Date</p>
                <input type="date" className="date-picker" />
            </div>
            </div>

<div class="classroom">
  <h2 className='welcome-title'>Classroom Seating</h2>
  <div class="seats-grid">
    
    <div class="seat occupied">1</div>
    <div class="seat">2</div>
    <div class="seat">3</div>
    <div class="seat">4</div>
    <div class="seat">5</div>
    
    <div class="seat occupied">6</div>
    <div class="seat">7</div>
    <div class="seat">8</div>
    <div class="seat">9</div>
    <div class="seat">10</div>
    
    <div class="seat">11</div>
    <div class="seat occupied">12</div>
    <div class="seat">13</div>
    <div class="seat">14</div>
    <div class="seat">15</div>
    
    <div class="seat">16</div>
    <div class="seat">17</div>
    <div class="seat">18</div>
    <div class="seat occupied">19</div>
    <div class="seat">20</div>
    
    <div class="seat">21</div>
    <div class="seat">22</div>
    <div class="seat occupied">23</div>
    <div class="seat">24</div>
    <div class="seat">25</div>
    
    <div class="seat">26</div>
    <div class="seat">27</div>
    <div class="seat">28</div>
    <div class="seat">29</div>
    <div class="seat">30</div>
  </div>
</div>
            
          
          {/* <div className="promo-card">
            <div className="promo-info">
              <h2 className="promo-title">Smart money management</h2>
              <p className="promo-desc">
                Experience global transactions with zero hidden charges. Secure,
                transfer and manage your finances with confidence.
              </p>
              <button className="promo-btn">Explore Features</button>
            </div>
            <div className="credit-card">
              <div className="card-overlay"></div>
              <div className="card-brand">
                <div className="card-type">Platinum Edge</div>
                <div className="card-logo">
                  <div className="card-logo-circle"></div>
                  <div className="card-logo-circle"></div>
                </div>
              </div>
              <div className="card-number">4832 7691 2450 8115</div>
              <div className="card-details">
                <div className="card-holder">
                  <div className="card-holder-label">CARD HOLDER</div>
                  <div className="card-holder-name">Alexander Morgan</div>
                </div>
                <div className="card-expiry">
                  <div className="card-expiry-label">EXPIRES</div>
                  <div className="card-expiry-date">09/27</div>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* <div className="transaction-section">
            <div className="transaction-card">
              <h3 className="section-title">Recent Expenses</h3>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <i className="fas fa-hamburger"></i>
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Dining Out</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Today, 14:45
                  </div>
                </div>
                <div className="transaction-amount negative">-$78</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <i className="fas fa-tshirt"></i>
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Retail Purchase</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Yesterday, 16:08
                  </div>
                </div>
                <div className="transaction-amount negative">-$125</div>
              </div>
            </div>
            <div className="transaction-card">
              <h3 className="section-title">Your Connections</h3>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="Lisa Johnson"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Lisa Johnson</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Today, 09:35
                  </div>
                </div>
                <div className="transaction-amount positive">+$85</div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src="https://i.pravatar.cc/100?img=11"
                    alt="Michael Torres"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Michael Torres</div>
                  <div className="transaction-time">
                    <i className="far fa-clock"></i> Monday, 17:45
                  </div>
                </div>
                <div className="transaction-amount negative">-$42</div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- Dashboard Sidebar --> */}
        {/* <div className="dashboard-sidebar">
          <div className="savings-card">
            <h3 className="savings-title">Monthly Savings</h3>
            <div className="savings-amount">$467.5</div>
            <div className="time-filter">
              <button className="time-option">Daily</button>
              <button className="time-option">Weekly</button>
              <button className="time-option active">Monthly</button>
              <button className="time-option">Annual</button>
            </div>
            <div className="chart-container">
              <svg
                className="chart"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="gradientFill"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4270F4" stopOpacity="0.7" />
                    <stop
                      offset="100%"
                      stopColor="#4270F4"
                      stopOpacity="0.1"
                    />
                  </linearGradient>
                </defs>
                <path
                  className="chart-line-path"
                  d="M0,80 C20,70 40,30 60,60 C80,90 100,40 120,30 C140,20 160,50 180,20 C200,30 220,60 240,80 C260,60 280,40 300,60"
                ></path>
                <path
                  className="chart-area"
                  d="M0,80 C20,70 40,30 60,60 C80,90 100,40 120,30 C140,20 160,50 180,20 C200,30 220,60 240,80 C260,60 280,40 300,60 L300,100 L0,100 Z"
                ></path>
                <circle
                  cx="180"
                  cy="20"
                  r="6"
                  fill="#4270F4"
                  stroke="#ffffff"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="timeline">
              <div className="month">Oct</div>
              <div className="month">Nov</div>
              <div className="month active">Dec</div>
              <div className="month">Jan</div>
              <div className="month">Feb</div>
              <div className="month">Mar</div>
            </div>
          </div>
          <div className="plan-card">
            <div className="plan-info">
              <div className="plan-title">Budget Goal Q1 2025</div>
              <div className="plan-status">On Track</div>
            </div>
            <div className="plan-progress">
              <div className="plan-percentage">68%</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )

}

export default ClientLayout;