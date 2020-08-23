import React from 'react';
import Container from '@material-ui/core/Container';
import SearchArea from './SearchArea';
import Category from './Category';

export default function Home() {
  return (
  <div>
     <Container>
               <SearchArea />
            </Container>
            <Container>
               <Category />
            </Container>
  </div>
  );
}