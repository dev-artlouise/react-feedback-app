
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer'
import FeedBackData from './data/FeedBackData';
import AboutIconLink from './components/shared/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';


function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container" >
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                    {/* <Footer /> */}
                                </>
                            }
                        >
                        </Route>

                        <Route
                            path='/about'
                            element={
                                <>
                                    <AboutPage />
                                    <AboutIconLink />
                                </>
                            }
                        >
                        </Route>


                    </Routes>
                </div>


            </Router>
        </FeedbackProvider>

    );
}

export default App