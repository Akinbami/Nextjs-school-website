import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CookiesProvider } from 'react-cookie';

import Header from './Header';
import Aside from './Aside';


const AdminLayout = props => (
  <CookiesProvider>
  		<Head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <title>ABI admin</title>
            <meta name="description" content="School of Academic and Behavioural Interventions (ABI), 
                    offers a consultancy and management service to support 
                    parents and educational providers when working with children 
                    on the autistic spectrum and related disorders." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
            <link rel="stylesheet" id="main-stylesheet" data-version="1.1.0" href="/styles/shards-dashboards.1.1.0.min.css" />
            <link rel="stylesheet" href="/styles/extras.1.1.0.min.css" />
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.snow.css" />
        </Head>
	    <div className="color-switcher-toggle animated pulse infinite">
            <i className="material-icons">settings</i>
        </div>
        <div className="container-fluid">
	        <div className="row">
	        	{props.sidebar?<Aside />:""}
	            
	    
	    		{props.children}
	    
			</div>
        </div>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
		<script src="https://unpkg.com/shards-ui@latest/dist/js/shards.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"></script>
		<script src="/scripts/extras.1.1.0.min.js"></script>
		<script src="/scripts/shards-dashboards.1.1.0.min.js"></script>
		<script src="/scripts/app/app-blog-new-post.1.1.0.js"></script>
		<style jsx global>{`
        
      	`}</style>

  </CookiesProvider>
);

export default AdminLayout;