
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useQuery, gql } from '@apollo/client';
import { CalendarClock } from "lucide-react";
const Dates = [
  {
    title: 'Application Opens',
    date: 'May 1, 2025',
    description: 'The application portal will open for new applicants.',
  },
  {
    title: 'Submission Deadline',
    date: 'June 15, 2025',
    description: 'All applications must be submitted by this date.',
  },
  {
    title: 'Interview Rounds',
    date: 'July 1 – July 10, 2025',
    description: 'Shortlisted candidates will be contacted for interviews.',
  },
  {
    title: 'Final Results',
    date: 'August 5, 2025',
    description: 'Final selection results will be published on the website.',
  },
];

const ImportantDates = () => {
  const {loading,error, data} = useQuery(gql`
          query ImportantDates {
        importantDates {
          event
          date
          description
        }
      }
    `);
  if(loading){
    return <div>Loading...</div>;
  }
  else if(error){
    return <div>Error: {error.message}</div>;
  }
  const importantDates = data?.importantDates;
  if(importantDates.length === 0) {
    return <div>No data found</div>;
  }
  console.log(importantDates);
  
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
       <Navbar />
    
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2076&auto=format&fit=crop"
          alt="Solar panels under blue sky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Solar World Congress
          </h1>
        </div>
      </div>

      {/* important dates section */}
      <section className="py-16 bg-white">
        <div className="min-h-screen bg-gray-50 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700">
                📅 Important Dates
                </h1>
                <div className="grid gap-6 md:grid-cols-2">
                {Dates.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition"
                    >
                    <h2 className="text-xl font-semibold text-green-600 mb-2">{item.event}</h2>
                    <p className="text-gray-800 font-medium">{item.date}</p>
                    { item.description && ( <p className="text-gray-600 mt-2">{item.description}</p>)}
                    </div>
                ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDates;