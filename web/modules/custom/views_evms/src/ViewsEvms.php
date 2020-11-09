<?php

namespace Drupal\views_evms;

use Drupal\Component\Utility\Html;
use Drupal\views\ViewExecutable;

/**
 * The primary class for the Views EVMS module.
 *
 * Provides many helper methods.
 *
 * @ingroup utility
 */
class ViewsEvms {

  /**
   * Returns the theme hook definition information.
   */
  public static function getThemeHooks() {
    $hooks['views_evms_carousel'] = [
      'preprocess functions' => [
        'template_preprocess_views_evms_carousel',
        'template_preprocess_views_view_carousel',
      ],
      'file' => 'views_evms.theme.inc',
    ];
    return $hooks;
  }

  /**
   * Return an array of breakpoint names.
   */
  public static function getBreakpoints() {
    return ['xs', 'sm', 'md', 'lg', 'xl'];
  }

  /**
   * Get column class prefix for the breakpoint.
   */
  public static function getColumnPrefix($breakpoint) {
    return 'col' . ($breakpoint != 'xs' ? '-' . $breakpoint : '');
  }

  /**
   * Get unique element id.
   *
   * @param \Drupal\views\ViewExecutable $view
   *   A ViewExecutable object.
   *
   * @return string
   *   A unique id for an HTML element.
   */
  public static function getUniqueId(ViewExecutable $view) {
    $id = $view->storage->id() . '-' . $view->current_display;
    return Html::getUniqueId('views-evms-' . $id);
  }

  /**
   * Get the number of items from the column class string.
   *
   * @param string $size
   *   Bootstrap grid size xs|sm|md|lg.
   *
   * @return int|false
   *   Number of columns in a 12 column grid or false.
   */
  public static function getColSize($size) {
    if (preg_match('~col-[a-z]{2}-([0-9]*)~', $size, $matches)) {
      return 12 / $matches[1];
    }

    return FALSE;
  }

}
