import { useState } from 'react';
import { Home } from './components/Home';
import { LiveTranscribe } from './components/LiveTranscribe';
import { History } from './components/History';
import { Home as HomeIcon, History as HistoryIcon, Box } from 'lucide-react';

type Screen = 'home' | 'live' | 'history';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative">
      {/* Screen Content */}
      <div className="pb-24 overflow-y-auto">
        {currentScreen === 'home' && <Home />}
        {currentScreen === 'live' && <LiveTranscribe />}
        {currentScreen === 'history' && <History />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentScreen('home')}
          className="flex flex-col items-center gap-1 flex-1"
        >
          <HomeIcon className={`w-6 h-6 ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs ${currentScreen === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>
            Home
          </span>
        </button>

        <button
          onClick={() => setCurrentScreen('live')}
          className="flex flex-col items-center -mt-8"
        >
          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Box className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-gray-600 mt-1">Live Transcribe</span>
        </button>

        <button
          onClick={() => setCurrentScreen('history')}
          className="flex flex-col items-center gap-1 flex-1"
        >
          <HistoryIcon className={`w-6 h-6 ${currentScreen === 'history' ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs ${currentScreen === 'history' ? 'text-blue-600' : 'text-gray-600'}`}>
            History
          </span>
        </button>
      </div>
    </div>
  );
}
