// src/components/CategoryCarousel.tsx
import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  count: number;
}

interface CategoryCarouselProps {
  categories: Category[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  const categoriesContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollOffset: number) => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex items-center mb-6">
      <div ref={categoriesContainerRef} className="flex overflow-x-auto scrollbar-hide pb-2 gap-2 flex-1">
        {categories.map((category, index) => (
          <div key={index} className={`p-4 rounded-lg flex-shrink-0 w-40 min-h-[100px] bg-gray-100 hover:bg-purple-200`}>
            <div className="text-sm">{category.name}</div>
            <div className="font-bold">{category.count} articles</div>
          </div>
        ))}
      </div>
      <button onClick={() => handleScroll(200)} className="ml-2 p-2 bg-white rounded-full -translate-x-6 cursor-pointer border-1 border-purple-300">
        <ChevronRight className="text-gray-400 " size={20} />
      </button>
    </div>
  );
};

export default CategoryCarousel;
