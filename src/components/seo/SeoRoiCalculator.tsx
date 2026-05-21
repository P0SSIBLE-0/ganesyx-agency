'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';
import styles from './SeoRoiCalculator.module.css';

export default function SeoRoiCalculator() {
  // Input states
  const [adSpend, setAdSpend] = useState<number>(8000); // Monthly Paid Ad Spend ($1k - $50k)
  const [cpc, setCpc] = useState<number>(3.50); // Avg. Cost-Per-Click ($1 - $15)
  const [organicTraffic, setOrganicTraffic] = useState<number>(35000); // Target Monthly Organic Traffic (5k - 100k)

  // Calculations
  const equivalentMonthlyAdValue = organicTraffic * cpc;
  const equivalentAnnualAdValue = equivalentMonthlyAdValue * 12;
  const annualAdSpend = adSpend * 12;
  const netAnnualSavings = equivalentAnnualAdValue - annualAdSpend;

  // Calculate Bar widths
  const maxValue = Math.max(annualAdSpend, equivalentAnnualAdValue, 1000);
  const adSpendBarWidth = (annualAdSpend / maxValue) * 100;
  const seoValueBarWidth = (equivalentAnnualAdValue / maxValue) * 100;

  // Format Helper
  const formatCurrency = (val: number) => {
    return val.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subHeading}>ROI Calculator</span>
          <h2 className={styles.title}>Calculate your compounding organic search value.</h2>
          <p className={styles.description}>
            See what your target organic traffic would cost you in Google Ads, 
            and calculate your net annual gain by investing in compounding search authority.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className={styles.calculatorGrid}>
          
          {/* Inputs Column */}
          <div className={styles.inputsCol}>
            
            {/* Slider 1: Monthly Ad Spend */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <label className={styles.sliderLabel} htmlFor="adSpend">Monthly PPC Ad Spend</label>
                <span className={styles.sliderValueDisplay}>{formatCurrency(adSpend)}</span>
              </div>
              <input 
                type="range" 
                id="adSpend"
                min="1000" 
                max="50000" 
                step="1000" 
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderLimits}>
                <span>$1,000</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Slider 2: Average Cost Per Click */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <label className={styles.sliderLabel} htmlFor="cpc">Average Cost-Per-Click (CPC)</label>
                <span className={styles.sliderValueDisplay}>${cpc.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                id="cpc"
                min="1.00" 
                max="15.00" 
                step="0.10" 
                value={cpc}
                onChange={(e) => setCpc(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderLimits}>
                <span>$1.00</span>
                <span>$15.00</span>
              </div>
            </div>

            {/* Slider 3: Target Monthly Traffic */}
            <div className={styles.sliderGroup}>
              <div className={styles.sliderLabelRow}>
                <label className={styles.sliderLabel} htmlFor="organicTraffic">Target Monthly Organic Visits</label>
                <span className={styles.sliderValueDisplay}>{organicTraffic.toLocaleString()} visits</span>
              </div>
              <input 
                type="range" 
                id="organicTraffic"
                min="5000" 
                max="100000" 
                step="1000" 
                value={organicTraffic}
                onChange={(e) => setOrganicTraffic(Number(e.target.value))}
                className={styles.rangeInput}
              />
              <div className={styles.sliderLimits}>
                <span>5,000</span>
                <span>100,000</span>
              </div>
            </div>

          </div>

          {/* Outputs Column */}
          <div className={styles.resultsCol}>
            
            {/* Output 1: Monthly Value */}
            <div className={styles.resultGroup}>
              <span className={styles.resultLabel}>Equivalent Monthly Ad Value</span>
              <div className={styles.resultValue}>
                {formatCurrency(equivalentMonthlyAdValue)}
                <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.4)', fontWeight: 'normal', marginLeft: '8px' }}>/ mo</span>
              </div>
            </div>

            {/* Output 2: Net Annual Savings */}
            <div className={styles.resultGroup}>
              <span className={styles.resultLabel}>Net Annual Growth Gain</span>
              <div className={`${styles.resultValue} ${styles.resultValueSaving}`}>
                {netAnnualSavings > 0 ? formatCurrency(netAnnualSavings) : '$0'}
                <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.4)', fontWeight: 'normal', marginLeft: '8px' }}>/ year</span>
              </div>
            </div>

            {/* Visualizer bars */}
            <div className={styles.visualizer}>
              <h3 className={styles.vizTitle}>Visual Value Comparison</h3>
              
              {/* PPC Spend Bar */}
              <div className={styles.barRow}>
                <div className={styles.barInfo}>
                  <span className={styles.barLabel}>Annual PPC Spend (Linear Cost)</span>
                  <span>{formatCurrency(annualAdSpend)}</span>
                </div>
                <div className={styles.barContainer}>
                  <div 
                    className={`${styles.barFill} ${styles.barFillAd}`} 
                    style={{ width: `${adSpendBarWidth}%` }}
                  />
                </div>
              </div>

              {/* SEO Compound Value Bar */}
              <div className={styles.barRow}>
                <div className={styles.barInfo}>
                  <span className={styles.barLabel}>Equivalent Organic Traffic Value (Compounding Asset)</span>
                  <span style={{ color: 'var(--brand)', fontWeight: 'bold' }}>{formatCurrency(equivalentAnnualAdValue)}</span>
                </div>
                <div className={styles.barContainer}>
                  <div 
                    className={`${styles.barFill} ${styles.barFillSeo}`} 
                    style={{ width: `${seoValueBarWidth}%` }}
                  />
                </div>
              </div>

              {/* ROI percentage bubble if savings positive */}
              {netAnnualSavings > 0 && (
                <div className={styles.roiBadge}>
                  SEO generates {((equivalentAnnualAdValue / Math.max(annualAdSpend, 1)) * 100).toFixed(0)}% more value than equivalent PPC spend.
                </div>
              )}
            </div>

            {/* Action CTA */}
            <button className={styles.ctaBtn}>
              <Calculator size={16} />
              <span>Request Organic Blueprint</span>
              <ArrowRight size={14} className={styles.ctaArrow} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
