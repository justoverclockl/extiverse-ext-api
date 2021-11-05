import app from 'flarum/forum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

export default class lastExtensions extends Page {

  oninit(vnode){
    super.oninit(vnode)
    this.loading = true
    this.ext = [];
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    app.setTitle(app.translator.trans('justoverclock-extiverse-ext-api.forum.pagetitle'));
    app.setTitleCount(0);

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://extiverse.p.rapidapi.com/",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "extiverse.p.rapidapi.com",
        "x-rapidapi-key": "9bb3c5af3bmshcd0329984eea2b0p13975djsn213b8019cc43"
      }
    };

    $.ajax(settings).done((response) => {
      this.ext = response.slice(0,15);
      this.loading = false;
      m.redraw();
    })
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }
    return (
      <div className="lastExtPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="nav IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="content sideNavOffset">
              <h1 className="lastExtTitle">
                {app.translator.trans('justoverclock-extiverse-ext-api.forum.pageTitle')}
              </h1>
              <p className="pagedescription">{app.translator.trans('justoverclock-extiverse-ext-api.forum.pageText')}</p>
              <div className="containerExtensions" id="extList">
                {this.ext.map((exte) =>{
                  return (
                    <tr class="listaEst">
                      <td class="tdzero"><img class="imgextiv" src={exte.image} width="30" height="30"/></td>
                      <td class="tdone"><a href={exte.url} target="_blank" rel="nofollow"><b>{exte.name}</b></a></td>
                      <td class="tdtwo">{exte.desc}</td>
                      <td class="tdthree"><i class="fas fa-download extiv"/>{exte.totalDownload}</td>
                    </tr>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
