"use client"

// 

import React from 'react';
import Image from 'next/image'
import WaitlistForm from '../_components/WaitlistForm';
import AutoTyper from '../_components/AutoTyper';
import AutoTyperNL from '../_components/AutoTyperNL';
import CTABanner from '../_components/CTABanner';

// export const metadata = {
//   title: 'Nauvis',
//   description: 'unlock data-driven business foresight ',
// }


export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 gap-12 lg:gap-16 text-center justify-items-center py-10 lg:py-28 px-10 lg:px-24">
        <div className="prose lg:prose-2xl text-cont">
          <h1>
            recommendation engines that  <br />
            <span className='underline decoration-highlight'>
              <AutoTyper
                typeArray={[
                  "tailor experiences",
                  "understand user interests",
                  "drive growth",
                  "deliver individualized suggestions",
                  "increase conversions",
                  "personalize product offerings",
                  "help discover new niches",
                  "boost user engagement",
                  "drive sales",
                  "provide detailed data insights",
                  "adapt to changing trends",
                  "self-improve over time",
                  "encourage full customization",
                  "accelerate conversions",
                  "conduct a/b testing",
                  "factor in extenal perspectives",
                  "maintain high accuracy",
                  "optimize for key metrics",
                  "scale elegantly"
                ]}
              />
            </span>
          </h1>
          <p className="text-base">launch ai-powered recommendation engines anywhere in minutes. </p>
          <div className='justify-items-center'><WaitlistForm alignSelf={"center"} /></div>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <video className="border border-light w-full lg:w-2/3 rounded-[20px]" src='./Nauvis-Showcase.mp4' controls="controls" />
        </div>
      </div>
      <div>
        {/* Desktop */}
        <div className='hidden lg:block'>
          <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-bg2 py-12 lg:py-32 px-10 lg:px-24">
            <div className="col-span-1 col-start-1 sticky top-60 h-fit mb-10">
              <div className="prose lg:prose-2xl">
                <h1 className='font-medium'>
                  <AutoTyperNL typeArray={['value proposition']} />
                </h1>
              </div>
              <br />
              <br />
              <div className="prose lg:prose-2xl">
                <p className="text-base"> in a world where digital businesses struggle to deeply engage users in crowded marketplaces, nauvis emerges as a revolutionary recommendations-as-a-service empowering product teams to increase conversion, gain wallet share and build loyalty through ultra personalized experiences.  </p>
              </div>
            </div>
            <div className="col-span-1 col-start-2">
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12 mb-20">
                <h3 className="mt-2">tailored content understanding</h3>
                <p className="text-base text-bg2">with configurable machine learning models tailored to unique product dynamics, user journeys and value drivers, nauvis recommendations capture nuanced affiliations beyond one-size-fits all algorithms.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12 mb-20">
                <h3>performance analytics & optimization</h3>
                <p className="text-base text-bg2">we provide clear roi analytics quantifying the sales impact of improved engagement and conversions driven by nauvis recommendations - and continually optimize the experience.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12 mb-20">
                <h3>context-aware real-time delivery</h3>
                <p className="text-base text-bg2">by considering each user's historical behaviors, recent browsing patterns and explicit feedback in-the-moment of interaction, our suggestions drive hyper-relevant engagement in any channel.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12 mb-20">
                <h3>multi-armed performance</h3>
                <p className="text-base text-bg2">using advanced multi-touch attribution, we provide clear analytics quantifying the impact recommendations have on key business metrics - conversions, order values, retention - empowering continual optimization towards specific kpis.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12 mb-20">
                <h3>deployment agility</h3>
                <p className="text-base text-bg2">with our flexible apis, cloud architecture and enterprise integration support, nauvis upgrades personalized experiences across channels and touchpoints without disrupting technical infrastructure.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-12">
                <h3>trust & transparency</h3>
                <p className="text-base text-bg2">we provide guardrails around bias, filter bubbles, and manipulation - instilling trust in automated experiences through governance, audit trails and exposing users to diverse ideas.</p>
              </div>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-bg2 py-12 lg:py-32 px-10 lg:px-24 content-center place-content-center place-items-center">
              <Image
                className='col-span-1 rounded-[40px] shadow-sm shadow-dark place-self-center'
                src="/flight_vectorz.png"
                alt="Flight Picture Vectorized"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1125}
              />
              <div className='col-span-1 prose lg:prose-2xl place-self-center'>
                <h2 className="font-light">crafting connections through intelligent experiences</h2>
                <p className='text-base'>nauvis enables digital properties across verticals to forge meaningful and relevant engagements with each visitor through unrivaled personalization powered by adaptable machine-learning algorithms tailored to their unique environments.
                  <br />
                  <br />
                  our mission is to help platforms continually anticipate user goals to craft interactions that build trust and affinity over time.
                  <br />
                  <br />
                  the result is sustaining differentiation through scientifically optimized relevancy that promotes satisfied users, enhanced lifetime value, and durable competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-dark py-12 lg:py-32 px-10 lg:px-24">
            <div className="prose lg:prose-2xl col-span-2 max-w-7xl prose-invert">
              <h1 className='font-medium'>
                <AutoTyperNL typeArray={['our solutions']} />
              </h1>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-6 w-full">
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">flexible model customization</h3>
                <p className="text-base text-dark">configure unique hybrid recommendation algorithms tailored to specific product attributes, user dynamics and business goals beyond one-size-fits-all engines.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">multi-channel journey</h3>
                <p className="text-base text-dark">coordinate consistent, impactful personalization across web, mobile, email, iot devices based on user data and behaviors aggregated into a unified profile.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">customer value optimization</h3>
                <p className="text-base text-dark">maximize customer lifetime value through segment-specific suggestions optimized across discovery, conversions, cross-sells, retention and brand affinity kpis.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">seamless integrations</h3>
                <p className="text-base text-dark">embed personalized experiences in existing frontend stacks from modern jamstacks to legacy templates through headless apis requiring no invasive changes.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">performance attribution</h3>
                <p className="text-base text-dark">quantify business impact of enhanced relevancy and engagement through meticulous measurement of metrics influenced by nauvis personalization.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">responsible ai safeguards</h3>
                <p className="text-base text-dark">provide guardrails and governance against unintended consequences of hyper-personalization - filter bubbles, radicalization etc via ethical ai practices.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">continuous <br />auto-tuning</h3>
                <p className="text-base text-dark">algorithms perpetually maintain optimal performance as interests evolve through automated feedback loops instead of tedious manual optimization.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">contextual recommendations</h3>
                <p className="text-base text-dark">suggest relevant products, content and offers tailored to customer’s dynamic situation - location, time of day, activity - via contextual integration.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-12 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">lookalike dna modelling</h3>
                <p className="text-base text-dark">identify and target customer archetypes demonstrating high affinity for certain items based on their holistic preference graph dna - beyond simplistic demographics.</p>
              </div>

            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='block lg:hidden'>
          <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-bg2 py-12 lg:py-32 px-10 lg:px-24">
            <div className="col-span-2 col-start-1 h-fit mb-4">
              <div className="prose lg:prose-2xl">
                <h1 className='font-medium'>
                  <AutoTyperNL typeArray={['value proposition']} />
                </h1>
              </div>
              <br />
              <br />
              <div className="prose lg:prose-2xl">
                <p className="text-base"> in a world where escalating trade wars, shifting policies, and supply chain volatility lead to $4 trillion in impacted trade annually, nauvis emerges as a revolutionary solution, empowering trade teams globally to enhance outcomes through predictive intelligence and data-driven clarity across markets.  </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6 mb-10">
                <h3 className="mt-2">tailored content understanding</h3>
                <p className="text-base text-bg2">with configurable machine learning models tailored to unique product dynamics, user journeys and value drivers, nauvis recommendations capture nuanced affiliations beyond one-size-fits all algorithms.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6 mb-10">
                <h3>performance analytics & optimization</h3>
                <p className="text-base text-bg2">we provide clear roi analytics quantifying the sales impact of improved engagement and conversions driven by nauvis recommendations - and continually optimize the experience.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6 mb-10">
                <h3>context-aware real-time delivery</h3>
                <p className="text-base text-bg2">by considering each user's historical behaviors, recent browsing patterns and explicit feedback in-the-moment of interaction, our suggestions drive hyper-relevant engagement in any channel.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6 mb-10">
                <h3>multi-armed performance</h3>
                <p className="text-base text-bg2">using advanced multi-touch attribution, we provide clear analytics quantifying the impact recommendations have on key business metrics - conversions, order values, retention - empowering continual optimization towards specific kpis.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6 mb-10">
                <h3>deployment agility</h3>
                <p className="text-base text-bg2">with our flexible apis, cloud architecture and enterprise integration support, nauvis upgrades personalized experiences across channels and touchpoints without disrupting technical infrastructure.</p>
              </div>
              <div className="bg-highlight prose prose-invert lg:prose-2xl rounded-[20px] p-8 pt-6">
                <h3>trust & transparency</h3>
                <p className="text-base text-bg2">we provide guardrails around bias, filter bubbles, and manipulation - instilling trust in automated experiences through governance, audit trails and exposing users to diverse ideas.</p>
              </div>
            </div>
          </div>
          <hr className="rounded max-w-[90%] mr-[5%] ml-[5%] opacity-10"></hr>
          <div className=''>
            <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-bg2 py-12 lg:py-32 px-10 lg:px-24 content-center place-content-center place-items-center">
              <Image
                className='col-span-2 rounded-[20px] shadow-sm shadow-dark'
                src="/flight_vectorz.png"
                alt="Flight Picture Vectorized"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={1000}
                height={1125}
              />
              <div className='col-span-2 prose lg:prose-2xl place-self-center'>
                <h2 className="font-base">crafting connections through intelligent experiences</h2>
                <p className='text-base'>nauvis enables digital properties across verticals to forge meaningful and relevant engagements with each visitor through unrivaled personalization powered by adaptable machine-learning algorithms tailored to their unique environments.
                  <br />
                  <br />
                  our mission is to help platforms continually anticipate user goals to craft interactions that build trust and affinity over time.
                  <br />
                  <br />
                  the result is sustaining differentiation through scientifically optimized relevancy that promotes satisfied users, enhanced lifetime value, and durable competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:gap-16 lg:gap-y-24 text-left justify-items-left bg-dark py-12 lg:py-32 px-10 lg:px-24">
            <div className="prose lg:prose-2xl col-span-2 max-w-7xl prose-invert">
              <h1 className='font-medium'>
                <AutoTyperNL typeArray={['our solutions']} />
              </h1>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-6 w-full">
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">flexible model customization</h3>
                <p className="text-base text-dark">configure unique hybrid recommendation algorithms tailored to specific product attributes, user dynamics and business goals beyond one-size-fits-all engines.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">multi-channel journey</h3>
                <p className="text-base text-dark">coordinate consistent, impactful personalization across web, mobile, email, iot devices based on user data and behaviors aggregated into a unified profile.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">customer value optimization</h3>
                <p className="text-base text-dark">maximize customer lifetime value through segment-specific suggestions optimized across discovery, conversions, cross-sells, retention and brand affinity kpis.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">seamless integrations</h3>
                <p className="text-base text-dark">embed personalized experiences in existing frontend stacks from modern jamstacks to legacy templates through headless apis requiring no invasive changes.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">performance attribution</h3>
                <p className="text-base text-dark">quantify business impact of enhanced relevancy and engagement through meticulous measurement of metrics influenced by nauvis personalization.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">responsible ai safeguards</h3>
                <p className="text-base text-dark">provide guardrails and governance against unintended consequences of hyper-personalization - filter bubbles, radicalization etc via ethical ai practices.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">contextual recommendations</h3>
                <p className="text-base text-dark">suggest relevant products, content and offers tailored to customer’s dynamic situation - location, time of day, activity - via contextual integration.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">ecosystem integrations</h3>
                <p className="text-base text-dark">access nauvis data, insights and analytical models via APIs and embeddings for integration into your BI tools, ERP platform and custom applications.</p>
              </div>
              <div className="bg-bg2 rounded-[20px] p-8 prose lg:prose-2xl prose-invert hover:scale-105">
                <h3 className="text-highlight2">lookalike dna modelling</h3>
                <p className="text-base text-dark">identify and target customer archetypes demonstrating high affinity for certain items based on their holistic preference graph dna - beyond simplistic demographics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
