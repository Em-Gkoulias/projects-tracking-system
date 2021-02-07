<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bug;

class BugController extends Controller
{

    public function index() {

        $bugs = Bug::all();
        return response()->json($bugs);
    }

    public function show($id) {

        $bug = Bug::findOrFail($id);
        return response()->json($bug);
    }

    public function store(Request $request) {

        $request->validate([
            'project_id' => ['required'],
            'title' => ['required'],
            'description' => ['required']
        ]);

        $bug = new Bug([
            'project_id' => $request->project_id,
            'title' => $request->title,
            'description' => $request->description
        ]);

        $bug->save();

        return response()->json([
            'data' => 'Bug created!'
        ]);
    }

    public function update(Request $request, $id) {

        $request->validate([
            'project_id' => ['required'],
            'title' => ['required'],
            'description' => ['required']
        ]);

        $bug = Bug::findOrFail($id);

        $bug->update(request()->all());

        return response()->json([
            'data' => 'Bug updated'
        ]);
    }

    public function destroy($id) {

        $bug = Bug::findOrFail($id);
        $bug->delete();

        return response()->json([
            'data' => 'Bug deleted!'
        ]);
    }
}
