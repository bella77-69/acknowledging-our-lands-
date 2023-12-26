"use client";
import React, { useState } from "react";

function LearnMore(props) {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAnswer = (event, index) => {
    event.preventDefault();
    event.stopPropagation();

    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  const questions = [
    "Understanding Land Acknowledgements",
    "Why is it important?",
    "How do I do a Land Acknowledgement?",
    "What does 'unceded' mean in a Land Acknowledgement?",
  ];

  const answers = [
    "A land acknowledgment is a formal recognition of the ancestral Indigenous territories where an event occurs, honoring the peoples who have stewarded the land for generations. In Canada, land acknowledgments typically include: Recognizing Traditional Owners: Acknowledging the Indigenous nations or communities that once inhabited and may still reside on the land. Treaty Acknowledgment: Mentioning relevant treaties, highlighting their importance and ongoing significance. Culture and History Respect: Showing respect for Indigenous  culture, history, and contributions, emphasizing the value of understanding and honoring their traditions. Commitment to Reconciliation: Many acknowledgments commit to reconciliation, aiming for a more equitable relationship between Indigenous and non-Indigenous communities. Education Opportunity: Land acknowledgments educate audiences about Indigenous history, contributions, and ongoing challenges. These acknowledgments have become common in Canada, especially in education, government events, and cultural gatherings. They promote awareness, respect, and contribute to reconciliation efforts. However, sincerity and meaningful actions to support Indigenous communities are  essential. Land acknowledgments recognize the enduring connection between Indigenous Peoples and their ancestral lands. ",
    " Land acknowledgements are a way to recognize the historical and ongoing connection of Indigenous peoples to the land, as well as to raise awareness about the injustices and challenges they have faced,including the loss of traditional territories and resources. Land acknowledgments are important for several reasons: Honoring Indigenous Presence: They recognize and honor the Indigenous communities with deep historical connections to the  land, shedding light on their often overlooked presence. Respecting Indigenous Culture: Land acknowledgments show respect for Indigenous rights, cultures, and traditions, countering historical erasure and promoting a more inclusive view of the Land's history.",
    " To conduct a meaningful land acknowledgment, follow these essential steps: Begin by researching the Indigenous peoples who have historically and currently inhabit the land in your location, understanding their culture, history, and traditional territories. Craft a concise, respectful statement that acknowledges these Indigenous nations or communities and their deep ties to the land. If relevant, mention any local treaties or agreements. Ensure sincerity, authenticity, and specificity to the location. Practice pronouncing Indigenous names or terms to demonstrate respect. Tailor the acknowledgment to your audience's context and formality. Decide on the appropriate moment in the event or gathering for the acknowledgment, usually near the beginning but potentially at other significant points. If time allows, offer a brief explanation before the acknowledgment, highlighting its significance and educating the audience about its purpose. When delivering the acknowledgment, speak clearly and respectfully. It's acceptable to acknowledge your efforts to learn and respect cultural sensitivities, especially if you're unsure about pronunciation. Follow the acknowledgment with meaningful actions that support Indigenous communities and contribute to reconciliation. This may involve backing Indigenous causes, educating yourself and others, or advocating for policies that respect Indigenous rights. Continuously engage in learning about Indigenous histories, cultures, and contemporary issues while staying informed about ongoing land and resource rights struggles. Be aware that some regions might have specific protocols or guidelines for land acknowledgments. It's crucial to respect these local protocols and seek guidance from local Indigenous communities when appropriate.",
    "In a land acknowledgment, the term 'unceded' refers to land that has not been legally transferred or signed away by Indigenous peoples to colonial or settler governments through treaties or other agreements. When an area is described as 'unceded,' it recognizes that the Indigenous communities that traditionally inhabited that land did not voluntarily cede, sell, or relinquish their rights and title to the land to the colonial or government authorities. In many countries, including Canada, the United States, and Australia, there are numerous instances where Indigenous lands were taken without formal treaties or agreements. The term 'unceded' is used to emphasize the ongoing and unresolved nature of these land disputes, acknowledging that the Indigenous rights to the land remain valid, even if they have not been officially recognized through legal processes. Land acknowledgments are a way to recognize the historical and ongoing connection of Indigenous peoples to the land, as well as to raise awareness about the injustices and challenges they have faced, including the loss of traditional territories and resources. *Ninety-five percent of British Columbia, including Vancouver, is on unceded traditional First Nations territory.",
  ];

  const questionElements = questions.map((questions, index) => (
    <div
      key={index}
      className="flex flex-col justify-between w-full px-6 py-4 mb-4 bg-gray-100 border dark:border-gray-700 rounded-3xl dark:bg-gray-800"
    >
      <div
        className="flex items-center justify-between"
        onClick={(e) => toggleAnswer(e, index)}
      >
        <span className="font-bold text-gray-300">{questions}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`text-blue-600 ${
            isOpen === index ? "rotate-180" : ""
          } dark:text-gray-100`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </div>

      {isOpen === index && (
        <p className="text-sm text-gray-300 pt-2">
          {answers[index]}
        </p>
      )}
    </div>
  ));

  return (
  
    <div className="flex flex-wrap items-center justify-center">
      {questionElements}
      <div className="flex flex-wrap items-center justify-center">
        <a
          href="https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl  text-gray-300 hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-200 dark:hover:bg-gray-600"
        >
          Truth and Reconciliation Commission's Calls to Action
        </a>
        <a
          href="https://www.justice.gc.ca/eng/declaration/un_declaration_EN1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between w-full px-6 py-4 mb-4  border dark:border-gray-700 rounded-3xl  text-gray-300 hover:text-gray-500 dark:bg-gray-800 dark:hover:text-gray-200 dark:hover:bg-gray-600"
        >
          United Nations Declaration on the Rights of Indigenous Peoples
        </a>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section className="bg-gray-800 text-gray-100 py-8 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
         Learn More
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <LearnMore />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
