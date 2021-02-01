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

    public function store(Request $request) {

        $request->validate([
            'title' => ['required'],
            'description' => ['required']
        ]);

        $project = new Project([
            'title' => $request->title,
            'description' => $request->description
        ]);

        $project->save();

        return response()->json([
            'data' => 'Project created!'
        ]);
    }

    public function show($id) {
        $project = Project::findOrFail($id);
        $project->bugs;

        return response()->json($project);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'title' => ['required'],
            'description' => ['required']
        ]);

        $project = Project::findOrFail($id);

        $project->update(request()->all());

        return response()->json([
            'data' => 'Project updated!'
        ]);
    }

    public function destroy($id) {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json([
            'data' => 'Project deleted!'
        ]);
    }

}
