// // components/sections/WritingTabsSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import { getArticlesByCategory, ArticleCategory } from '@/data/writingData';
// import { ArticleCardWriting } from '@/components/Cards/ArticleCardWriting';

// const tabs = [
//   { id: 'blogs' as ArticleCategory, label: 'Blogs' },
//   { id: 'caseStudies' as ArticleCategory, label: 'Case Studies' },
//   { id: 'apiDocs' as ArticleCategory, label: 'API Documentation' },
//   { id: 'openSource' as ArticleCategory, label: 'Open Source' },
//   { id: 'contentForBrands' as ArticleCategory, label: 'Content for Brands' },
// ];

// export const WritingTabsSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<ArticleCategory>('blogs');
  
//   // Fetch articles from writingData.ts using the helper function
//   const articles = getArticlesByCategory(activeTab);

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12 pb-6 border-b border-gray-200">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
//                 activeTab === tab.id
//                   ? 'bg-[#1B1B1B] text-white'
//                   : 'bg-gray-100 text-[#525252] hover:bg-gray-200'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Content Grid - Rendering articles from writingData.ts */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article) => (
//             <ArticleCardWriting
//               key={article.id}
//               image={article.image}
//               readTime={article.readTime}
//               title={article.title}
//               description={article.description}
//               link={article.link}
//               linkText={article.linkText}
//             />
//           ))}
//         </div>

//         {/* Empty State */}
//         {articles.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-[#A3A3A3] text-lg">
//               No content available in this category yet.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// components/sections/WritingTabsSection.tsx
'use client';

import React, { useState } from 'react';
import { getArticlesByCategory, ArticleCategory } from '@/data/writingData';
import { ArticleCardWriting } from '@/components/Cards/ArticleCardWriting';

const tabs = [
  { id: 'blogs' as ArticleCategory, label: 'Blogs' },
  { id: 'caseStudies' as ArticleCategory, label: 'Case Studies' },
  { id: 'apiDocs' as ArticleCategory, label: 'API Documentation' },
  { id: 'openSource' as ArticleCategory, label: 'Open Source' },
  { id: 'contentForBrands' as ArticleCategory, label: 'Content for Brands' },
];

export const WritingTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArticleCategory>('blogs');
  
  // Fetch articles from writingData.ts using the helper function
  const articles = getArticlesByCategory(activeTab);

  // Determine if we should use list layout (for non-blog categories)
  const useListLayout = !['blogs', 'tutorials'].includes(activeTab);

  return (
    <section className="py-20 px-6" >
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1B1B1B] text-white'
                  : 'bg-gray-100 text-[#525252] hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content - List Layout for non-blog categories */}
        {useListLayout ? (
          <div className="max-w-5xl mx-auto space-y-12">
            {articles.map((article) => (
              <ArticleCardWriting
                key={article.id}
                image={article.image}
                readTime={article.readTime}
                title={article.title}
                description={article.description}
                link={article.link}
                linkText={article.linkText}
                companyName={article.companyName}
                variant="list"
              />
            ))}
          </div>
        ) : (
          /* Content Grid - Card Layout for blogs/tutorials */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCardWriting
                key={article.id}
                image={article.image}
                readTime={article.readTime}
                title={article.title}
                description={article.description}
                link={article.link}
                linkText={article.linkText}
                variant="card"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-lg ${useListLayout ? 'text-gray-400' : 'text-[#A3A3A3]'}`}>
              No content available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};