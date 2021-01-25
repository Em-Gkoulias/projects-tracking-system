<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Bug;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index() {
        
        $projects = Project::all();

        foreach($projects as $project) {
            $project->bugs;
        }

        return response()->json($projects);
    }

    public function show($id) {
        $project = Project::find($id);
        $project->bugs;
        
        return response()->json($project);
    }

    public function store($id) {

        $data = request()->validate([
            'title' => ['required'],
            'description' => ['required']
        ]);

        // dd((int)$id);

        Bug::create([
            'project_id' => (int)$id,
            'title' => $data['title'],
            'description' => $data['description']
        ]);

        return redirect("projects/$id");
    }
}