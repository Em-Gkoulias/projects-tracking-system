<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function bugs() {
        return $this->hasMany(Bug::class);
    }

    public static function boot() {
        parent::boot();
        self::deleting(function($project) {
            $project->bugs()->each(function($bug) {
                $bug->delete();
            });
        });
    }
}
