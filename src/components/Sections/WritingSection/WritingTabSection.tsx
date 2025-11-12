// components/sections/WritingTabsSection.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { getArticlesByCategory, ArticleCategory, Article } from '@/data/writingData';
import { ArticleCardWriting } from '@/components/Cards/ArticleCardWriting';
import { Search, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';

const tabs = [
  { id: 'blogs' as ArticleCategory, label: 'Blogs' },
  { id: 'caseStudies' as ArticleCategory, label: 'Case Studies' },
  { id: 'apiDocs' as ArticleCategory, label: 'API Documentation' },
  { id: 'openSource' as ArticleCategory, label: 'Open Source' },
  { id: 'contentForBrands' as ArticleCategory, label: 'Content for Brands' },
];

const ITEMS_PER_PAGE = 6;

export const WritingTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ArticleCategory>('blogs');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get all articles for the active tab
  const allArticles = getArticlesByCategory(activeTab);

  // Extract unique tags from current category articles
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    allArticles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allArticles]);

  // Filter articles based on search and tags
  const filteredArticles = useMemo(() => {
    let filtered = allArticles;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.companyName?.toLowerCase().includes(query)
      );
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(article =>
        selectedTags.some(selectedTag =>
          article.tags.includes(selectedTag)
        )
      );
    }

    return filtered;
  }, [allArticles, searchQuery, selectedTags]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Determine layout
  const useListLayout = !['blogs', 'tutorials'].includes(activeTab);

  // Reset to page 1 when filters change
  const handleTabChange = (tabId: ArticleCategory) => {
    setActiveTab(tabId);
    setCurrentPage(1);
    setSearchQuery('');
    setSelectedTags([]);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery.trim() !== '' || selectedTags.length > 0;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 pb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
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

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={20} />
              <input
                type="text"
                placeholder="Search articles by title, tags, or company..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B1B1B] focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTags.length > 0
                  ? 'bg-[#1B1B1B] text-white'
                  : 'bg-gray-100 text-[#525252] hover:bg-gray-200'
              }`}
            >
              <Filter size={20} />
              Filter by Tags
              {selectedTags.length > 0 && (
                <span className="bg-white text-[#1B1B1B] text-xs font-bold px-2 py-0.5 rounded-full">
                  {selectedTags.length}
                </span>
              )}
            </button>
          </div>

          {/* Tag Filters */}
          {showFilters && availableTags.length > 0 && (
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-gray-700">Filter by Tags:</p>
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-[#525252] hover:text-[#1B1B1B] font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-[#1B1B1B] text-white'
                        : 'bg-white text-[#525252] border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>
                Showing {filteredArticles.length} of {allArticles.length} articles
              </span>
              {selectedTags.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">|</span>
                  <span>Filtered by: {selectedTags.join(', ')}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content - List or Grid Layout */}
        {paginatedArticles.length > 0 ? (
          <>
            {useListLayout ? (
              <div className="max-w-5xl mx-auto space-y-12 mb-12">
                {paginatedArticles.map((article) => (
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {paginatedArticles.map((article) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);

                    const showEllipsis =
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 && currentPage < totalPages - 2);

                    if (showEllipsis) {
                      return (
                        <span key={page} className="px-2 text-gray-400">
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`min-w-[40px] h-10 rounded-lg font-medium transition-all ${
                          currentPage === page
                            ? 'bg-[#1B1B1B] text-white'
                            : 'border border-gray-200 hover:bg-gray-50 text-[#525252]'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="mx-auto text-gray-300" size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 mb-6">
              {hasActiveFilters
                ? 'Try adjusting your search or filters'
                : 'No content available in this category yet.'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 bg-[#1B1B1B] text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};