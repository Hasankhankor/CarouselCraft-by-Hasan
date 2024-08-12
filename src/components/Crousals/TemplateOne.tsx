"use client"

import { useMyContext } from '@/lib/Context'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import UserHandleCard from './UserHandleCard'
import bannerImg from '../../../public/banner.png'

function TemplateOne() {

    const {
        setCrouLength,
        bgColor,
        setBgColor,
        primaryColor,
        setPrimaryColor,
        myImg,
        bg,
        count,
        setHaveImg,
        banner,
        setShowForm
    } = useMyContext()

    const [templateData, setTemplateData] = useState({
      crousal: [
          {
            className: "",
            Title: null,
            subtitle: `Unlock the Power of Social Media for Your Business.

        • Engage with a wider audience
        • Build brand loyalty
        • Drive traffic to your website

        Here are the top 10 social media strategies to elevate your brand presence (swipe to discover):`,
            description: null,
            banner: false,
            bannerUrl: "",  // Replace newUrl with an empty string or a default value
          },
          {
            className: "",
            Title: "MARKETING STRATEGIES",
            subtitle: `5 Ways to Boost Your Email Open Rates`,
            description: `Optimize your email campaigns by focusing on subject lines, personalization, and timing. Consistency is key to keeping your audience engaged and increasing open rates.`,
            banner: true,
            bannerUrl: "",  // Replace newUrl with an empty string or a default value
          },
          {
            className: "",
            Title: "LEARN FROM THE BEST",
            subtitle: `What Jeff Bezos Taught Me About Business`,
            description: `Insights from successful entrepreneurs can transform your approach to business. Learn how to apply their principles to achieve your goals.`,
            banner: true,
            bannerUrl: "",  // Replace newUrl with an empty string or a default value
          },
          {
            className: "",
            Title: "STAND OUT IN THE CROWD",
            subtitle: `How to Differentiate Your Brand in a Saturated Market`,
            description: `Focus on your unique selling points and leverage them to create a distinct brand identity that resonates with your target audience.`,
            banner: true,
            bannerUrl: "",  // Replace newUrl with an empty string or a default value
          },
          {
            className: "",
            Title: "Join Our Community!",
            subtitle: `Subscribe to our newsletter and join over 50,000 marketers receiving exclusive tips and insights every week.`,
            description: `🚀 🎯 📩`,
            banner: false,
            bannerUrl: "",  // Replace newUrl with an empty string or a default value
          },
      ],
      arrow: true,
      defaultBg: "#e0f7fa",
      primaryColor: "#00796b",
  });

  useEffect(() => {
    if(count >= 1){
      const len = count - 1
      const handleShow = {
        title:templateData.crousal[len].Title !== null ? true : false,
        subtitle:templateData.crousal[len]?.subtitle !== null ? true : false,
        description: templateData.crousal[len]?.description !== null ? true : false
      }
      setShowForm(handleShow)
    }
  }, [count])

  // Function to update the bannerUrl for a specific item
  const updateBannerUrl = (index: number, newUrl: string) => {
   // Create a copy of the templateData
   const updatedTemplateData = { ...templateData };

   // Update the bannerUrl of the specified item
   updatedTemplateData.crousal[index] = {
     ...updatedTemplateData.crousal[index],
     bannerUrl: newUrl,
   };

   // Update the state with the modified data
   setTemplateData(updatedTemplateData);
  };

  // IT WILL RUN WHEN THE USER UPLOAD IMG FOR BANNER
  useEffect(() => {
    if(count !== null){
      const indx = count - 1;
      if (myImg !== templateData.crousal[indx]?.bannerUrl) {
        updateBannerUrl(indx, myImg);
      }
    }
  }, [myImg]);

  const onCrousalLoad = () => {
    setCrouLength(templateData.crousal.length)
    setBgColor(templateData.defaultBg);
    setPrimaryColor(templateData.primaryColor);
  }

  // OPENING USE-EFFECT
  useEffect(() => {
    setHaveImg(false)
    onCrousalLoad()
  },[])

  // CUSTOM INDX
  let indxCount = 0

  return (
    <>
    {templateData.crousal.map((val, indx) => {
        indxCount = indxCount + 1;

        return(
            <div
            key={indx}
              id={`slide${indxCount}`}
              className="h-[800px] p-4  block  min-w-[400px] "
              style={
                bg.length > 1
                  ? {
                      backgroundImage: "url(" + bg + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : { backgroundColor: bgColor }
              }
            >
              <div
                className={`p-5 h-full   relative   border-2  rounded-sm flex flex-col items-center justify-between gap-4`}
                style={{ borderColor: primaryColor }}
              >
                <div
                  className="pb-2 border-b-2  w-full"
                  style={{ borderColor: primaryColor }}
                >
                  <UserHandleCard />
                </div>
                <div
                  className="h-full w-full flex justify-center items-center flex-col gap-4 "
                  style={{ color: primaryColor }}
                >
                  <span
                    id={`title${indxCount}`}
                    className={
                      val?.Title !== null
                        ? "text-base text-start font-bold w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val?.Title}
                  </span>

                  <span
                    id={`subtitle${indxCount}`}
                    className={
                      val.subtitle !== null
                        ? "text-lg text-start font-medium w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val.subtitle}
                  </span>

                  <span
                    id={`description${indxCount}`}
                    className={
                      val?.description !== null
                        ? "text-xs text-start  w-full whitespace-pre-wrap"
                        : "hidden"
                    }
                  >
                    {val?.description}
                  </span>

                  <div
                    id={`image${indxCount}`}
                    className={
                      val?.banner
                        ? "h-[124px] relative w-full flex justify-start  "
                        : "hidden"
                    }
                  >
                    <Image
                      src={val.bannerUrl || bannerImg}
                      alt="banners"
                      loading="eager"
                      priority
                      id={`slideImg${indxCount}`}
                      width={248}
                      height={124}
                    />
                  </div>
                </div>


              </div>
            </div>
        )
    })}

    </>
  )
}

export default TemplateOne
