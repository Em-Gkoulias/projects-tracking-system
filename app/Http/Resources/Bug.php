<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Bug extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'project_id' => $this->project_id,
            'description' => $this->description,
            'title' => $this->title,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
