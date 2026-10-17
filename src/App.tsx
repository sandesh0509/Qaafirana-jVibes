/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, TabType } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { InquiryModal } from './components/InquiryModal';
import { ReservationModal } from './components/ReservationModal';
import { ProfileModal } from './components/ProfileModal';
import { WeatherModal } from './components/WeatherModal';
import { Toast, ToastMessage } from './components/Toast';
import { HomeScreen } from './views/HomeScreen';
import { ExpeditionsScreen } from './views/ExpeditionsScreen';
import { PlanTripScreen } from './views/PlanTripScreen';
import { CommunityScreen } from './views/CommunityScreen';
import { DEPARTURE_BATCHES, Batch } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'responsive'>('mobile');

  // Modals state
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [inquiryTargetTitle, setInquiryTargetTitle] = useState('Soul of Kashmir (12 - 17 April)');
  const [selectedBatchForBooking, setSelectedBatchForBooking] = useState<Batch>(DEPARTURE_BATCHES[0]);

  // Wishlist state
  const [isSaved, setIsSaved] = useState(false);

  // Toast state
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (title: string, message: string) => {
    setToast({
      id: String(Date.now()),
      title,
      message,
    });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleOpenInquiry = (batchTitle: string) => {
    setInquiryTargetTitle(batchTitle);
    setIsInquiryOpen(true);
  };

  const handleOpenReservation = (batch: Batch) => {
    setSelectedBatchForBooking(batch);
    setIsReservationOpen(true);
  };

  const handleConfirmReservation = (details: {
    batch: Batch;
    travelers: number;
    travelerName: string;
    travelerPhone: string;
    totalPrice: number;
    depositAmount: number;
  }) => {
    showToast(
      'Seat Reserved Temporarily!',
      `Token deposit of ₹${details.depositAmount.toLocaleString('en-IN')} confirmed for ${details.travelers} traveler(s). Our Trip Concierge is preparing your travel dossier.`
    );
  };

  const handleInquirySubmit = (data: { name: string; phone: string; question: string }) => {
    showToast(
      'Message Received',
      `Thank you ${data.name}! A Kashmiri expedition captain will message you on ${data.phone}.`
    );
  };

  const handleToggleSave = () => {
    const next = !isSaved;
    setIsSaved(next);
    showToast(
      next ? 'Added to Wishlist' : 'Removed from Wishlist',
      next
        ? 'Soul of Kashmir saved to your traveler dossier.'
        : 'Expedition removed from saved trails.'
    );
  };

  const handleOpenWhatsApp = () => {
    showToast(
      'Connecting to Concierge',
      'Opening Qaafirana WhatsApp expedition support (+91 98765 43210).'
    );
  };

  return (
    <div className="min-h-screen bg-[#f7faf6] text-[#181c1a] flex flex-col items-center">
      {/* Device Mode Wrapper: On desktop, offers authentic mobile frame or fluid responsive */}
      <div
        className={`w-full transition-all duration-300 ${
          deviceMode === 'mobile'
            ? 'max-w-md mx-auto min-h-screen bg-[#f7faf6] sm:shadow-[0_0_50px_rgba(0,0,0,0.08)] sm:border-x sm:border-[#ecefeb]'
            : 'max-w-4xl mx-auto min-h-screen'
        }`}
      >
        {/* Sticky Header */}
        <Header
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          onOpenWeather={() => setIsWeatherOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
          deviceMode={deviceMode}
          onToggleDeviceMode={() =>
            setDeviceMode(deviceMode === 'mobile' ? 'responsive' : 'mobile')
          }
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative w-full pt-20 pb-20 bg-[#f7faf6]">
          {activeTab === 'home' && (
            <HomeScreen
              onNavigateTab={setActiveTab}
              onSelectRoute={(route) => {
                setInquiryTargetTitle(route);
              }}
              onOpenWeather={() => setIsWeatherOpen(true)}
              onOpenWhatsApp={handleOpenWhatsApp}
              onShowToast={showToast}
            />
          )}

          {activeTab === 'expeditions' && (
            <ExpeditionsScreen
              onOpenInquiry={handleOpenInquiry}
              onOpenReservation={handleOpenReservation}
              onShowToast={showToast}
              isSaved={isSaved}
              onToggleSave={handleToggleSave}
            />
          )}

          {activeTab === 'plan-trip' && (
            <PlanTripScreen
              onShowToast={showToast}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {activeTab === 'community' && (
            <CommunityScreen
              onShowToast={showToast}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}
        </main>

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton onOpenChat={handleOpenWhatsApp} />

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNav activeTab={activeTab} onSelectTab={setActiveTab} />
      </div>

      {/* Global Interactive Modals */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        onSubmit={handleInquirySubmit}
        selectedBatchTitle={inquiryTargetTitle}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        selectedBatch={selectedBatchForBooking}
        onConfirmReservation={handleConfirmReservation}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        savedExpeditionsCount={isSaved ? 1 : 0}
      />

      <WeatherModal
        isOpen={isWeatherOpen}
        onClose={() => setIsWeatherOpen(false)}
      />

      {/* Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
