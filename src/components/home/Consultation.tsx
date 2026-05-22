'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Consultation.module.css';

export default function Consultation() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 7, 17)); // Default to Mon, Aug 17 2026 to match design exactly
  const [currentMonth, setCurrentMonth] = useState(7); // August
  const [currentYear, setCurrentYear] = useState(2026);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Month Names
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Week days
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dynamically load Calendly assets
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up assets on unmount
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  // Calendar math helpers
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const handleClear = () => {
    setSelectedDate(null);
  };

  const handleOK = () => {
    if (!selectedDate) {
      alert('Please select a date first!');
      return;
    }

    // Format the date to YYYY-MM-DD
    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const dd = String(selectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    // Open Calendly Popup Widget with prefilled date
    // Note: The user can substitute their own Calendly URL here
    const calendlyUrl = `https://calendly.com/ganesyx-agency/consultation?date=${formattedDate}`;

    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } else {
      // Fallback: Open in a new tab if widget script hasn't loaded yet
      window.open(calendlyUrl, '_blank');
    }
  };

  // Render Days Grid
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
  const totalSlots = daysInMonth + firstDayIndex;
  const rowsCount = Math.ceil(totalSlots / 7);

  const daysGrid = [];
  let dayNum = 1;

  for (let i = 0; i < rowsCount * 7; i++) {
    if (i < firstDayIndex || dayNum > daysInMonth) {
      daysGrid.push(null);
    } else {
      daysGrid.push(dayNum);
      dayNum++;
    }
  }

  // Formatting dates for display
  const formatDateHeader = (date: Date | null) => {
    if (!date) return 'Select date';
    const daysAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${daysAbbr[date.getDay()]}, ${monthsAbbr[date.getMonth()]} ${date.getDate()}`;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header Title & Subtitle */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>
            Book your Consultation <br />
            below, we&apos;ll handle the rest.
          </h2>
          <p className={styles.subtitle}>
            Trusted by businesses to deliver impactful digital marketing strategies, <br />
            measurable growth, and results that make a difference.
          </p>
        </div>

        {/* Layout Grid */}
        <div className={styles.bookingGrid}>
          
          {/* Left Side: Custom Material Date Picker */}
          <div className={styles.calendarCard}>
            <div className={styles.calendarHeader}>
              <span className={styles.selectDateLabel}>Select date</span>
              <div className={styles.dateDisplayRow}>
                <span className={styles.selectedDateText}>
                  {formatDateHeader(selectedDate)}
                </span>
                <button className={styles.editButton} aria-label="Edit Date">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.calendarBody}>
              {/* Month Navigation */}
              <div className={styles.monthNavRow}>
                <div className={styles.monthSelectorWrapper}>
                  <button 
                    className={styles.monthSelectorBtn} 
                    onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                  >
                    {months[currentMonth]} {currentYear}
                    <svg className={styles.chevronIcon} width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {showMonthDropdown && (
                    <div className={styles.monthDropdown}>
                      {months.map((m, idx) => (
                        <button
                          key={m}
                          className={`${styles.dropdownItem} ${idx === currentMonth ? styles.dropdownItemActive : ''}`}
                          onClick={() => {
                            setCurrentMonth(idx);
                            setShowMonthDropdown(false);
                          }}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.navArrows}>
                  <button className={styles.navArrow} onClick={handlePrevMonth} aria-label="Previous Month">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className={styles.navArrow} onClick={handleNextMonth} aria-label="Next Month">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Weekdays Header */}
              <div className={styles.weekdaysHeader}>
                {weekDays.map((day, idx) => (
                  <span key={idx} className={styles.weekday}>{day}</span>
                ))}
              </div>

              {/* Days Grid */}
              <div className={styles.daysGrid}>
                {daysGrid.map((day, idx) => {
                  if (day === null) {
                    return <span key={`empty-${idx}`} className={styles.emptySlot} />;
                  }

                  const dayIsToday = isToday(day);
                  const dayIsSelected = isSelected(day);

                  return (
                    <button
                      key={`day-${day}`}
                      className={`${styles.dayButton} ${dayIsToday ? styles.today : ''} ${dayIsSelected ? styles.selected : ''}`}
                      onClick={() => handleSelectDay(day)}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer buttons */}
            <div className={styles.calendarFooter}>
              <button className={styles.footerBtn} onClick={handleClear}>CLEAR</button>
              <div className={styles.footerRightBtns}>
                <button className={styles.footerBtn} onClick={handleClear}>CANCEL</button>
                <button className={`${styles.footerBtn} ${styles.okBtn}`} onClick={handleOK}>OK</button>
              </div>
            </div>
          </div>

          {/* Right Side: Ganesyx Branding Panel */}
          <div className={styles.brandingCard}>
            <div className={styles.brandingContent}>
              <div className={styles.logoContainer}>
                <img src="/logo.png" alt="Ganesyx Logo" className={styles.logoImg} />
                <svg className={styles.logoOrbit} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing background orbit */}
                  <ellipse 
                    cx="50" 
                    cy="20" 
                    rx="44" 
                    ry="8" 
                    stroke="rgba(255, 255, 255, 0.35)" 
                    strokeWidth="2.2" 
                    transform="rotate(-12 50 20)"
                  />
                  {/* Sharp white foreground orbit */}
                  <ellipse 
                    cx="50" 
                    cy="20" 
                    rx="44" 
                    ry="8" 
                    stroke="#ffffff" 
                    strokeWidth="1.2" 
                    transform="rotate(-12 50 20)"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
