<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Bug;
use App\Http\Resources\Project as ProjectResource;
use App\Http\Resources\Bug as BugResource;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function index() {
        $projects = Project::with('bugs')->get();

        return response()->json($projects);
    }

    public function show($id) {
        $project = Project::findOrFail($id);
        $project->bugs;

        return response()->json($project);
    }

}
