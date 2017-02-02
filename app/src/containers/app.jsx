import React, { Component } from 'react';
import { Header } from '../components';
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // }
  }

  componentWillMount() {
//    fetch('../../../dist/api.json')
//    .then(function(response) {
//      console.log(response);
//    })
    console.log(data);
    const columns = data.page.content.filter((content) => /column/i.test(content.name));
    console.log("columns: ", columns);
  }
                          
  render() {
    const carousel = (
    <div id="myCarousel" className="carousel slide">
                
                
                <div className="carousel-inner">
                    <div className="item active">
                        <div className="row row-no-padding">
                            <div className="col-xs-6"><a href="#x"><img src="http://html.crunchpress.com/materialmag/images/fsimg3.jpg" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>hello</h3>
                                <p>world</p>
                              </div>
                            </div>
                            <div className="col-xs-6"><a href="#x"><img src="http://html.crunchpress.com/materialmag/images/fsimg2.jpg" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>world</h3>
                                <p>hello</p>
                              </div>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="item">
                        <div className="row row-no-padding">
                            <div className="col-xs-6"><a href="#x" className="thumbnail"><img src="http://placehold.it/1000x500" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>Title</h3>
                                <p>Content</p>
                              </div>
                            </div>
                            <div className="col-xs-6"><a href="#x" className="thumbnail"><img src="http://placehold.it/1000x500" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>Title</h3>
                                <p>Content</p>
                              </div>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="item">
                        <div className="row row-no-padding">
                            <div className="col-xs-6"><a href="#x" className="thumbnail"><img src="http://placehold.it/1000x500" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>Title</h3>
                                <p>Content</p>
                              </div>
                            </div>
                            <div className="col-xs-6"><a href="#x" className="thumbnail"><img src="http://placehold.it/1000x500" alt="Image" className="img-responsive"/></a>
                              <div className="carousel-caption">
                                <h3>Title</h3>
                                <p>Content</p>
                              </div>
                        </div>
                        
                    </div>
                    
                </div>
				<a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

                <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
            </div>
        </div>
  )
    
    const post = (
      <section>
        <div className="post">
          <div className="row">
            <div className="col-md-6 media">
              <img src="https://paullaros.bitbucket.io/ada1.1/img/photos/DeathtoStock_EnergyandSerenity31.jpg" className="img-responsive"/>
            </div>
            <div className="col-md-6 caption">
              <span className="post-tag">#music</span>
              <a href="post-image.html" className="post-title">Don't look at me</a>
              <span className="post-date">19 Sept 2015</span>
              <p className="post-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <a href="#">parturient montes</a>, nascetur ridiculus mus. Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
      </section>
    )
                          
    return (
     <div className="container-fluid">
       <Header />
        <div className="row">
          <div className="col-md-12">
            {carousel}
          </div>
        </div>
       <div className="row main-content">
         <div className="col-md-8">
           <p>Hello World! Checking to see!!</p>
           {post}
         </div>
         <div className="col-md-4">

         </div>
       </div>
     </div>
    )
  }
}

const data = {
    page: {
        content: [
            {
                name: "SpanABTop",
                rank: 1,
                parameters: {},
                collections: [{
                    id: 89137751,
                    name: "Collection588506697",
                    renderStyle: "Simple",
                    rank: 1,
                    excludedFromFeed: false,
                    parameters: {
                        kicker: " "
                    },
                    assets: []
                }]
            },           
            {
                name: "cColumn",
                rank: 4,
                parameters: {},
                collections: [{
                        id: 89137754,
                        name: "SharedSpon1",
                        renderStyle: "Ads",
                        rank: 1,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: [{
                            id: 100000000000003,
                            slugname: "Spon1",
                            rank: 1,
                            type: "SingleAd",
                            typeOfMaterial: "",
                            renderStyle: "",
                            lastPublished: "2010-09-09T10:38:09.009.EDT",
                            lastFileGenerated: "2010-09-09T10:38:09.009.EDT",
                            showTimestamp: false
                        }]
                    },
                    {
                        id: 89137758,
                        name: "Collection718164132",
                        renderStyle: "StandardThumb",
                        rank: 2,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: " "
                        },
                        assets: []
                    },
                    {
                        id: 89137761,
                        name: "Collection0000000000000003",
                        renderStyle: "StandardThumb",
                        rank: 3,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: []
                    },
                    {
                        id: 89137764,
                        name: "Shared0000000000000001",
                        renderStyle: "Ads",
                        rank: 4,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: [{
                                id: 100000000006413,
                                slugname: "Featured Properties1",
                                rank: 1,
                                type: "TwoColumnCustom",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:08.008.EDT",
                                lastFileGenerated: "2010-09-09T10:38:08.008.EDT",
                                showTimestamp: false,
                            },
                            {
                                id: 100000000006414,
                                slugname: "Featured Properties2",
                                rank: 2,
                                type: "TwoColumnCustom",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:07.007.EDT",
                                lastFileGenerated: "2010-09-09T10:38:07.007.EDT",
                                showTimestamp: false
                            },
                            {
                                id: 100000000000004,
                                slugname: "SFMiddle",
                                rank: 3,
                                type: "BigAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:09.009.EDT",
                                lastFileGenerated: "2010-09-09T10:38:09.009.EDT",
                                showTimestamp: false
                            },
                            {
                                id: 100000000000005,
                                slugname: "ccolumnTN",
                                rank: 4,
                                type: "BigAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:09.009.EDT",
                                lastFileGenerated: "2010-09-09T10:38:09.009.EDT",
                                showTimestamp: false
                            },
                            {
                                id: 100000000000006,
                                slugname: "Box3",
                                rank: 5,
                                type: "SingleAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:10.010.EDT",
                                lastFileGenerated: "2010-09-09T10:38:10.010.EDT",
                                showTimestamp: false
                            },
                            {
                                id: 100000000042925,
                                slugname: "SFFranchise",
                                rank: 6,
                                type: "BigAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:10.010.EDT",
                                lastFileGenerated: "2010-09-09T10:38:10.010.EDT",
                                showTimestamp: false
                            }
                        ]
                    },
                    {
                        id: 89137767,
                        name: "Collection0000000000000004",
                        renderStyle: "StandardThumb",
                        rank: 5,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: [
                            {
                                id: 100000001361470,
                                slugname: "Events Guide",
                                rank: 4,
                                type: "EventsGuide",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2012-11-09T22:19:35.035.EST",
                                lastFileGenerated: "2012-11-09T22:19:35.035.EST",
                                showTimestamp: false,
                                parameters: {
                                    SECTION: "arts",
                                    SECTION_DISPLAY_NAME: "Arts",
                                    REGION: "cColumn"
                                }
                            },
                            {
                                id: 100000000000054,
                                slugname: "MostPopular",
                                rank: 5,
                                type: "MostPopular",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2011-09-26T14:13:02.002.EDT",
                                lastFileGenerated: "2011-09-26T14:13:02.002.EDT",
                                showTimestamp: false,
                                parameters: {
                                    SECTION: "nyregion",
                                    SECTION_DISPLAY_NAME: "N.Y. / Region",
                                    REGION: "cColumn"
                                }
                            }
                        ]
                    },
                    {
                        id: 89137770,
                        name: "Shared0000000000000002",
                        renderStyle: "Ads",
                        rank: 6,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: [{
                                id: 100000000006415,
                                slugname: "Featured Properties3",
                                rank: 1,
                                type: "TwoColumnCustom",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:07.007.EDT",
                                lastFileGenerated: "2010-09-09T10:38:07.007.EDT",
                                showTimestamp: false,
                            },
                            {
                                id: 100000000002448,
                                slugname: "SFMiddle2",
                                rank: 2,
                                type: "BigAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:10.010.EDT",
                                lastFileGenerated: "2010-09-09T10:38:10.010.EDT",
                                showTimestamp: false
                            },
                            {
                                id: 100000000000007,
                                slugname: "Box1",
                                rank: 3,
                                type: "BigAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:10.010.EDT",
                                lastFileGenerated: "2010-09-09T10:38:10.010.EDT",
                                showTimestamp: false,
                            },
                            {
                                id: 100000000000008,
                                slugname: "Middle5",
                                rank: 4,
                                type: "SingleAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:08.008.EDT",
                                lastFileGenerated: "2010-09-09T10:38:08.008.EDT",
                                showTimestamp: false,
                            },
                            {
                                id: 100000000006454,
                                slugname: "Auctions Marketplace",
                                rank: 5,
                                type: "GridAdTwoColumnCustom",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:10.010.EDT",
                                lastFileGenerated: "2010-09-09T10:38:10.010.EDT",
                                showTimestamp: false,
                            },
                        ]
                    },
                    {
                        id: 89137773,
                        name: "Collection0000000000000005",
                        renderStyle: "StandardThumb",
                        rank: 7,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        }
                    },
                    {
                        id: 89137776,
                        name: "Shared0000000000000003",
                        renderStyle: "Ads",
                        rank: 8,
                        excludedFromFeed: false,
                        parameters: {
                            kicker: ""
                        },
                        assets: [{
                                id: 100000000005459,
                                slugname: "Feature1",
                                rank: 1,
                                type: "SingleAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:07.007.EDT",
                                lastFileGenerated: "2010-09-09T10:38:07.007.EDT",
                                showTimestamp: false,
                            },
                            {
                                id: 100000000000011,
                                slugname: "SponLink",
                                rank: 2,
                                type: "SingleAd",
                                typeOfMaterial: "",
                                renderStyle: "",
                                lastPublished: "2010-09-09T10:38:09.009.EDT",
                                lastFileGenerated: "2010-09-09T10:38:09.009.EDT",
                                showTimestamp: false,
                            }
                        ]
                    }
                ]
            },
            {
                name: "LiveMobileResults",
                rank: 5,
                parameters: {},
                collections: [{
                    id: 89137755,
                    name: "LiveMobileResults",
                    renderStyle: "",
                    rank: 1,
                    excludedFromFeed: false,
                    parameters: {
                        kicker: ""
                    },
                    assets: []
                }]
            }
        ]
    }
}
          
          
        






