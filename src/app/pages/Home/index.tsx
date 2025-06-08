import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.scss';
import { Header } from 'app//components/Header/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { LineChart } from 'app/components/Chart/LineChart';
import { Banner } from './components/Banner';
import mainPhoto from 'assets/images/dummy/main_photo.jpg';
import { FilterDinner } from './components/FilterDinner';
import { ListPlate } from './components/ListPlate';
import { ScrollTopButton } from 'app/components/Buttons/ScrollTopButton';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { fetchPlates, setHomeLoading } from './data/actions';

export function HomePage() {
  const bannerData = {
    bgr: mainPhoto,
    date: '05/21',
    percent: 75,
  };

  const { plates, isLoading } = useAppSelector(state => state.home);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const dataFetchedRef = useRef(false);

  const [categories, setCategories] = useState<Array<string>>([
    'morning',
    'lunch',
    'dinner',
    'snack',
  ]);

  const filterCategories = (category: string) => {
    if (categories.includes(category)) {
      setCategories([...categories.filter(x => x !== category)]);
    } else {
      setCategories([...categories, category]);
    }
  };

  const getFilteredPlates = useMemo(() => {
    return plates.filter(item => categories.includes(item.category));
  }, [categories, plates]);

  const loadMore = () => {
    fetchPlatesData();
  };

  const fetchPlatesData = useCallback(async () => {
    dispatch(setHomeLoading(true));
    setPage(page + 1);
    dispatch(fetchPlates(page + 1));
  }, [dispatch, page]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchPlatesData();
  }, [fetchPlatesData]);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Some Content for SEO optimize" />
      </Helmet>
      <Header />
      <div className="banner-container">
        <div className="left">
          <Banner
            img={bannerData.bgr}
            date={bannerData.date}
            percent={bannerData.percent}
          />
        </div>
        <div className="right">
          <LineChart />
        </div>
      </div>
      <FilterDinner categories={categories} onSetCategory={filterCategories} />
      <ListPlate
        isLoading={isLoading}
        dinnerData={getFilteredPlates}
        categories={categories}
        onLoadMore={loadMore}
      />
      {/* TODO: show loading when fetching api */}
      <ScrollTopButton />
      <Footer />
    </>
  );
}
