import React from 'react';
import { useMemo, useState, useEffect, useRef } from 'react';
import { CatalogProps } from '../../types/catalog';
import CatalogItem from '../card/Card';

const Catalog: React.FC<CatalogProps> = ({ catalog }) => {

  const [sortBlock, setSortBlock] = useState<boolean>(false);
  const sortBlockRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const toggleFilterBlock = () => {
    setSortBlock((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sortBlockRef.current &&
      !sortBlockRef.current.contains(event.target as Node)
    ) {
      setSortBlock(false);
    }
  };

  useEffect(() => {
    if (sortBlock) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortBlock]);

  const sortedCatalog = useMemo(() => {
    switch (filter) {
      case 'price':
        return [...catalog].sort((a, b) => a.price - b.price);
      case 'category':
        return [...catalog].sort((a, b) => a.category.localeCompare(b.category));
      case 'a-z':
        return [...catalog].sort((a, b) => a.title.localeCompare(b.title));
      case 'z-a':
        return [...catalog].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return catalog;
    }
  }, [filter, catalog]);

  const totalPages = Math.ceil(sortedCatalog.length / itemsPerPage);

  const paginatedCatalog = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedCatalog.slice(startIndex, endIndex);
  }, [currentPage, sortedCatalog]);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-4 mb-6 text-2xl font-semibold">Catalog</h1>
        <div className="relative" ref={sortBlockRef}>
          <span className="cursor-pointer" onClick={toggleFilterBlock}>
            Sorting
          </span>
          {sortBlock && (
            <div className="absolute bg-white top-10 right-0 z-10 rounded-md w-36 text-gray-700">
              <ul className="w-full text-center py-2">
                <li 
                  className={`cursor-pointer px-4 ${ filter === 'all' && 'bg-gray-300'}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </li>
                <li
                  className={`cursor-pointer px-4 ${filter === 'price' && 'bg-gray-300'}`}
                  onClick={() => setFilter('price')}
                >
                  Price
                </li>
                <li
                  className={`cursor-pointer px-4 ${filter === 'category' && 'bg-gray-300'}`}
                  onClick={() => setFilter('category')}
                >
                  Category
                </li>
                <li
                  className={`cursor-pointer px-4 ${filter === 'a-z' && 'bg-gray-300'}`}
                  onClick={() => setFilter('a-z')}
                >
                  A-Z
                </li>
                <li
                  className={`cursor-pointer px-4 ${filter === 'z-a' && 'bg-gray-300'}`}
                  onClick={() => setFilter('z-a')}
                >
                  Z-A
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedCatalog.map((product) => ( <CatalogItem key={product.id} product={product} />))}
          </div>
          <div className="flex justify-center items-center m-6">
            <button
              className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
            >
              Previous
            </button>
            <span className="px-4">{`${currentPage} of ${totalPages}`}</span>
            <button
              className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => changePage(currentPage + 1)}
            >
          Next
        </button>
      </div>
    </div>
  );
};

export default Catalog;
