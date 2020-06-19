import React, {Component} from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components'
import CollectionPage from '../collection/collection.component';

import {Route } from 'react-router-dom';

const ShopPage = ({match}) => {   
     
        return(
            <div className="shop-page">     
               <Route exact path={`${match.path}`} component={CollectionsOverview} />
               <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
}



export default ShopPage;