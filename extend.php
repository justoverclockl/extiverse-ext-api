<?php

/*
 * This file is part of justoverclock/extiverse-ext-api.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\ExtiverseExtApi;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/extensions', 'justoverclock/extiverse-ext-api'),

    new Extend\Locales(__DIR__.'/locale'),
];
