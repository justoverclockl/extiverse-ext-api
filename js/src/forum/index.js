import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import lastExtensions from './components/lastExtensions'

app.initializers.add('justoverclock/extiverse-ext-api', () => {
  app.routes.lastExtensions = {
    path: '/extensions',
    component: lastExtensions,
  };
  extend(IndexPage.prototype, 'navItems', (navItems) => {
    navItems.add(
      'lastExtensions',
      <LinkButton href={app.route('lastExtensions')} icon="fas fa-store">
        {app.translator.trans('justoverclock-extiverse-ext-api.forum.extPage')}
      </LinkButton>,
      100
    );

    return navItems;
  });
});

