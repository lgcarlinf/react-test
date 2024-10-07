export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface PaginationButtonProps {
  page: number;
  onClick: () => void;
  isActive: boolean;
}

const PaginationButton = ({ page, onClick, isActive }:PaginationButtonProps) => (
  <button
    onClick={onClick}
    className={`flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 ${
      isActive ? "bg-gray-2 font-bold text-blue-600" : ""
    }`}
  >
    {page}
  </button>
);

const Ellipsis = () => <li key="ellipsis" className="p-2 border-x-[1px]">...</li>;

export default function Pagination({ totalPages, currentPage, onPageChange }:PaginationProps) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const pages = [];
    const pageRange = 2; 

    const addPageButton = (page:number) => {
      pages.push(
        <li key={page}>
          <PaginationButton
            page={page}
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}
          />
        </li>
      );
    };

    if (currentPage > pageRange + 1) {
      addPageButton(1);

      if (currentPage > pageRange + 2) {
        pages.push(<Ellipsis key="start-ellipsis" />);
      }
    }

    for (let i = Math.max(2, currentPage - pageRange); i <= Math.min(totalPages - 1, currentPage + pageRange); i++) {
      addPageButton(i);
    }

    if (currentPage < totalPages - pageRange - 1) {
      pages.push(<Ellipsis key="end-ellipsis" />);
    }

    if (currentPage < totalPages - pageRange) {
      addPageButton(totalPages);
    }

    return pages;
  };

  return (
    <div className="bg-white text-center">
      <div className="inline-flex justify-center rounded bg-white p-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.13)]">
        <ul className="inline-flex overflow-hidden rounded-lg border border-stroke">
          <li>
            <button
              onClick={handlePrevPage}
              className="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {renderPageButtons()}
          <li>
            <button
              onClick={handleNextPage}
              className="flex h-10 min-w-10 items-center justify-center px-2 text-base font-medium text-dark hover:bg-gray-2"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
